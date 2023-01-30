import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReceiverComponent } from '../../../shared/component/receiver/receiver.component';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import {map, startWith, debounceTime, switchMap} from 'rxjs/operators';
import * as moment from 'moment';
import { ManagerService } from '../../../shared/services/manager.service';
import { GeneralItem } from '../../../models/GeneralItem';
import { Receiver } from '../../../models/receiver';
import { Shipper } from '../../../models/shipper';
import { ShipmentService } from '../../../shared/services/shipment.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ImageComponent } from '../../../shared/modal/image/image.component';
import { AuthenticationService } from '../../../services/authentication.service';


import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import { User } from '../../../models/user';
import { environment } from '../../../../environments/environment';
import { FilemanagerComponent } from '../../../shared/modal/filemanager/filemanager.component';
import { ShipperService } from '../../../shared/services/shipper.service';
import { ReceiverService } from '../../../shared/services/receiver.service';




@Component({
  selector: 'app-createshipments',
  templateUrl: './createshipments.component.html',
  styleUrls: ['./createshipments.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class CreateshipmentsComponent implements OnInit , OnChanges {

  @ViewChild('itemTemplate') itemTemplate: TemplateRef<any>;

  searchReceiverTerms = {
    name : '',
  };

  searchShipperTerms = {
    name : '',
  };
  gallery_items: GalleryItem[];

  shipmentHistory = [];

  lightboxRef = null;

  submitted = false;

  history_files = [];

  users_list: User[] = [];
  shippers_list: Shipper[] = [];
  receivers_list: Receiver[] = [];
  destinations_list: GeneralItem[] = [];
  warehouses_list: GeneralItem[] = [];

  shipper_types:GeneralItem[] = [];
  container_types:GeneralItem[] = [];

  shippment_statuses:GeneralItem[] = [];
  filterUsers: Observable<User[]>;
  filteredShippers: Observable<Shipper[]>;
  filteredReceivers: Observable<Receiver[]>;
  filteredDestinations: Observable<GeneralItem[]>;

  dataSource = new MatTableDataSource<Shipper>(this.shippers_list);
  dataSource2 = new MatTableDataSource<Receiver>(this.receivers_list);

  userNameCtrl:FormControl = new FormControl('',[Validators.required]);

  minDate = moment();

  dataForm:FormGroup;

  percentCompleted:number = 0;

  isUploaded:boolean = false;

  formData:FormData;

  shipmentId: number;
  editMode:boolean = false;
  private sub: any;

  permission:any = {};
  isAdmin = false;


  constructor(private _snackBar: MatSnackBar , private router: Router,public dialog: MatDialog , private route: ActivatedRoute , private fb:FormBuilder,private _manager:ManagerService , private _shipmentService:ShipmentService , private shipperService:ShipperService , private receiverService:ReceiverService , private auth:AuthenticationService,public gallery: Gallery, public lightbox: Lightbox) {
    if(auth.currentUserValue.permission){

      this.permission = auth.currentUserValue.permission.shipment;
      if(this.permission.canassign){
        this.isAdmin = this.permission.canassign;
      } else {
        if(auth.currentUserValue.user_group_id == 1){
          this.isAdmin = true;
        }
      }
    }
  }


  ngOnChanges(changes: SimpleChanges): void {

  }



  ngOnInit(): void {

    //this.id = this.route.snapshot.paramMap.get('id') ? parseInt(this.route.snapshot.paramMap.get('id')) : 0;


    this.resetForm();


    this._shipmentService.getBulk().subscribe(data => {
      if(data){
        this.shippers_list = data.shippers;
        this.activeShippers();

        this.receivers_list = data.receivers;
        this.activeReceivers();

        this.destinations_list = data.destinations;
        this.activeDestinations();

        this.shipper_types = data.shipper_types;

        this.container_types = data.container_types;


        this.shippment_statuses = data.shipment_statuses.filter(item => this.permission.statuses.indexOf(item.id) !== -1);
        if(!this.shipmentId){
          this.dataForm.patchValue({
            history : {
              shipment_status_id : this.shippment_statuses[0].id
            }
          });
        }

        this.warehouses_list = data.warehouses;

        this.auth.getUsers().subscribe(data => {
          if(data){
            if(data){
              this.users_list = data.data;
              this.activeUsers();
            }
          }
          this.activeParameters();
        });

      }
    });





    this.lightboxRef = this.gallery.ref('lightbox');

    this.lightboxRef.setConfig({
      imageSize: ImageSize.Contain,
      thumbPosition: ThumbnailsPosition.Top,
      itemTemplate: this.itemTemplate,
      gestures: false
    });





  }

  activeParameters(){
    this.sub = this.route.params.subscribe(params => {
      this.shipmentId = +params['id'];
      if(!isNaN(this.shipmentId)){
        this.editMode =true;
        this.getShipment(this.shipmentId);

      } else {

        this.editMode =false;
        this.shipmentHistory = null;
        this.shipmentId = null;
        //this.resetForm();
        this.dataForm.get("other").get('attach_file').setValidators([Validators.required]);

      }
    });
  }

  activeDestinations(){
    this.filteredDestinations = this.dataForm.get("other").get('destination_name').valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filterDestination(name) : this.destinations_list?.slice())
    );
  }



  activeUsers(){
    this.filterUsers = this.userNameCtrl.valueChanges
    .pipe(
      startWith(''),
      map(value => {
        return typeof value === 'string' ? value : (value.firstname + ' ' + value.lastname)
      }),
      map(name => name ? this._filterUser(name) : this.users_list?.slice())
    );
  }

  activeShippers(){
    this.filteredShippers = this.dataForm.get("shipper").get('name').valueChanges
    .pipe(
      startWith(''),
      debounceTime(500),
      map(value => typeof value === 'string' ? value : value.name),
      switchMap((value) => value ? this._filterShipper(value) : of(this.shippers_list?.slice()))
    );
  }

  activeReceivers(){
    this.filteredReceivers = this.dataForm.get("receiver").get('name').valueChanges
    .pipe(
      startWith(''),
      debounceTime(500),
      map(value => typeof value === 'string' ? value : value.name),
      switchMap((value) => value ? this._filterReceiver(value) : of(this.receivers_list?.slice()))
    );
  }

  resetForm(){
    this.dataForm = this.fb.group({
      shipper : this.fb.group({
        new : [''],
        shipper_id : [''],
        name : ['',Validators.required],
        phone : ['',Validators.required],
        address : ['',Validators.required],
        email : ['', [Validators.required, Validators.email]],
        ein : ['',Validators.required],
        shipper_type_id : ['',Validators.required]
      }),
      receiver : this.fb.group({
        new : [''],
        receiver_id : [''],
        name : ['',Validators.required],
        phone : ['',Validators.required],
        address : ['',Validators.required],
        email : ['', [Validators.required, Validators.email]]
      }),
      other : this.fb.group({
        date : [moment(),Validators.required],
        container_type_id : ['',Validators.required],
        destination_id : [''],
        destination_name : ['',Validators.required],
        warehouse_id : ['',Validators.required],
        akey:[0],
        title:[0],
        new_destination : [''],
        attach_file:[''],
        note:['']
      }),
      history : this.fb.group({
        shipment_status_id : [''],
        note : [''],
        file : ['']
      }),
      packages : this.fb.array([],Validators.required)
    });
  }

  getShipment(id){
    const fdata:FormData = new FormData();
    fdata.append('shipment_id',id);
    this._shipmentService.getShipment(fdata).subscribe(data => {
      if(data){
        if(data.data){
          const shipData = data.data.data;
          const sprData = data.data.shipper;
          const recData = data.data.receiver;
          const desData = data.data.destination;
          const hisData = data.data.history;
          const pacData = data.data.packages;

          this.shipmentHistory = hisData;

          this.dataForm.patchValue({
            shipper : {
              shipper_id : sprData.shipper_id,
              name : sprData.name,
              email : sprData.email,
              phone : sprData.phone,
              address : sprData.address,
              ein : sprData.ein,
              shipper_type_id : sprData.shipper_type_id
            },
            receiver : {
              receiver_id : recData.receiver_id,
              name : recData.name,
              email : recData.email,
              phone : recData.phone,
              address : recData.address,
            },
            other : {
              date : moment(new Date(shipData.date)),
              container_type_id : shipData.container_type_id,
              title : parseInt(shipData.title),
              akey : parseInt(shipData.akey),
              warehouse_id : shipData.warehouse_id,
              destination_name : desData.name,
              destination_id : desData.id,
              note : shipData.note,
            },history : {
              shipment_status_id : shipData.shipment_status_id
            }
          });

          if(moment(new Date(shipData.date)).isAfter(this.minDate)){
            //this.minDate = moment(new Date(shipData.date));
          }


          for(let i = 0 ; i < pacData.length ; i++){
            let pacItem = JSON.parse(pacData[i].data);

            if(pacItem.type == '1'){
              this.packageArray.push(this.fb.group({
                type:[parseInt(pacItem.type)],
                year : [pacItem.year,Validators.required],
                model : [pacItem.model,Validators.required],
                mark : [pacItem.mark,Validators.required],
                vin : [pacItem.vin,Validators.required],
                value : [pacItem.value],
                file : [''],
                input : [pacItem.input]
              }));
            } else if(pacItem.type == '2') {
              this.packageArray.push(this.fb.group({
                type:[parseInt(pacItem.type)],
                description : [pacItem.description,Validators.required],
                value : [pacItem.value,Validators.required],
                file : [''],
                input : [pacItem.input]
              }));
            }

          }
        }
      }

    });
  }


  dateHandler(type: string, event: MatDatepickerInputEvent<Date>) {
    this.dataForm.get("other").get('date').setValue(moment(event.value).format('MM/DD/YYYY'));
  }

  onFileChange(event)  {
    this.history_files = [];
    for (var i = 0; i < event.target.files.length; i++) {
      this.history_files.push(event.target.files[i]);
    }

  }

  onAttachFileChange(event) {
    this.dataForm.get("other").get('attach_file').setValue(event.target.files[0]);
  }

  deletePackage(index){
    this.packageArray.removeAt(index);
  }

  onPackageFileChange(event,i)  {
    this.packageArray.at(i).get('file').setValue(event.target.files[0]);
    //console.log(this.dataForm.get("packages"));
    //this.dataForm.get("packages")[0].get('file').setValue(event.target.files[0]);
  }


  get packageArray(){
    return this.dataForm.get('packages') as FormArray;
  }

  get shipperForm(){
    return this.dataForm.controls.shipper['controls'];
  }

  get receiverForm(){
    return this.dataForm.controls.receiver['controls'];
  }

  get otherForm(){
    return this.dataForm.controls.other['controls'];
  }

  addPackage(type){
    if(type == 1){
      this.packageArray.push(this.fb.group({
        type:[type],
        year : ['',Validators.required],
        model : ['',Validators.required],
        mark : ['',Validators.required],
        vin : ['',Validators.required],
        value : ['',Validators.required],
        file : [''],
        input : ['']
      }));
    } else if(type == 2) {
      this.packageArray.push(this.fb.group({
        type:[type],
        description : ['',Validators.required],
        value : ['',Validators.required],
        file : [''],
        input : ['']
      }));
    }
  }

  newShipperChange(event){
    if(event.checked){
      this.dataForm.patchValue({
        shipper : {
          shipper_id : '',
          name : '',
          phone : '',
          address : '',
          email : '',
          ein : '',
          shipper_type_id : ''
        }
      });
    }
  }

  newReceiverChange(event){
    if(event.checked){
      this.dataForm.patchValue({
        receiver : {
          receiver_id : '',
          name : '',
          phone : '',
          address : '',
          email : ''
        }
      });
    }
  }

  newDestinationChange(event){
    if(event.checked){
      this.dataForm.patchValue({
        other : {
          destination_id : '',
          destination_name : ''
        }
      });
    }
  }

  removePackage(index){
    this.packageArray.removeAt(index);
  }

  openGallery(_item){
    if(_item.file.length > 0){
      this.gallery_items = _item.file.map(item => new ImageItem({ src: item, thumb: item }));


      this.lightboxRef.load(this.gallery_items);
      //this.lightbox.open(0);
      this.lightbox.open(0, 'lightbox', {panelClass: 'fullscreen'});
    }


  }

  openEditFiles(item){
    const dialogRef = this.dialog.open(FilemanagerComponent, {
      data: {item: item , type : 'shipment'}
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  downloadGallery(item){
    let formData:FormData = new FormData();
    formData.append("history_id", item.history_id);

    this._shipmentService.downloadHistoryItem(formData).subscribe(event => {
      if(event.history_file){
        window.open(event.history_file, "_blank");
      }
    }, error => {
      this.submitted = false;
    });
  }

  downloadShipmentGallery(){
    let formData:FormData = new FormData();
    formData.append("shipment_id", this.shipmentId.toString());

    this._shipmentService.downloadHistoryItem(formData).subscribe(event => {
      if(event.history_file){
        window.open(event.history_file, "_blank");
      }
    }, error => {
      this.submitted = false;
    });
  }


  openImage(url){
    const dialogRef = this.dialog.open(ImageComponent, {
      data: {url: url}
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  submitForm(){
    this.submitted = true;
    let formData:FormData = new FormData();
    let copyFormData = JSON.parse(JSON.stringify(this.dataForm.value));
    copyFormData.other.attach_file = this.dataForm.get("other").get('attach_file').value;
    this.jsonToFormData(formData,copyFormData);

    for (var i = 0; i < this.history_files.length; i++) {
      formData.append("history_files[]", this.history_files[i]);
    }

    if(this.shipmentId){
      formData.append('shipment_id',this.shipmentId.toString());
    }

    if(this.userNameCtrl.value){
      formData.append('assigned_user_id',this.userNameCtrl.value.user_id);
    }

    formData.append('shipment_link',`${environment.home}admin/shipments/info/`);

    this._shipmentService.saveShipment(formData).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.percentCompleted = Math.round(100 * event.loaded  / event.total);
      } else if (event instanceof HttpResponse) {
        this.isUploaded = true;
        this.submitted = false;
        this.openSnackBar('Data submited successfully','');
        if(!this.shipmentId){
          this.router.navigate(["/admin/shipments/list"]);
        }
        console.log("success");
      }
    }, error => {
      this.submitted = false;
      this.openSnackBar('Something wrong happen!','');
      //this.router.navigate(["/admin/shipments/list"]);
      console.log("error");
    });

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  buildFormData(formData, data, parentKey) {
    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
      Object.keys(data).forEach(key => {
        this.buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
      });
    } else {
      const value = data == null ? '' : data;

      formData.append(parentKey, value);
    }
  }

  jsonToFormData(formData , data) {
    this.buildFormData(formData, data,'');
  }


  displayShipper(user: Shipper): string {
    return user && user.name ? user.name : '';
  }

  displayReceiver(user: Receiver): string {
    return user && user.name ? user.name : '';
  }

  displayDestination(item?: GeneralItem): string {
    return item && item.name ? item.name : '';
  }

  displayUsers(item: User): string {

    return item && item.firstname ? (item.firstname + ' ' + item.lastname) : '';
  }

  onUserSelectionChanged($event):any{
    const userData = $event.option.value;

    this.userNameCtrl.setValue(userData);
  }

  onDestinationSelectionChanged($event):any{
    const shpdata = $event.option.value;
    this.dataForm.patchValue({
      other : {
        destination_id : shpdata.id,
        destination_name : shpdata.name
      }
    });
  }

  onShipperSelectionChanged($event):any{
    const shpdata = $event.option.value;
    this.dataForm.patchValue({
      shipper : {
        shipper_id : shpdata.shipper_id,
        name : shpdata.name,
        phone : shpdata.phone,
        address : shpdata.address,
        email : shpdata.email,
        ein : shpdata.ein,
        shipper_type_id : shpdata.shipper_type_id
      }
    });
  }

  onNewShipperChange($event):any{
    this.dataForm.get('shipper').get('name').setValue('');
  }

  onReceiverSelectionChanged($event):any{
    this.dataForm.get('receiver').get('name').setValue($event.option.value);
    const shpdata = $event.option.value;
    this.dataForm.patchValue({
      receiver : {
        receiver_id : shpdata.receiver_id,
        name : shpdata.name,
        phone : shpdata.phone,
        address : shpdata.address,
        email : shpdata.email

      }
    });
  }

  private _filterUser(name: string): User[] {
    const filterValue = name.toLowerCase();
    return this.users_list?.filter(option => (option.firstname + ' ' + option.lastname).toLowerCase().indexOf(filterValue) === 0);
  }


  private _filterShipper(value: string) {
    this.searchShipperTerms.name = value;
    return this.shipperService!.getShippers({page : 1 , filter : Object.keys(this.searchShipperTerms).map(key => key + '___' + this.searchShipperTerms[key]).join('|')})
      .pipe(
        map((data) => {
          if(data.items){
            return data.items;
          }
          return [];
        })
      );
  }

  private _filterReceiver(value: string) {
    this.searchReceiverTerms.name = value;
    return this.receiverService!.getReceivers({page : 1 , filter : Object.keys(this.searchReceiverTerms).map(key => key + '___' + this.searchReceiverTerms[key]).join('|')})
      .pipe(
        map((data) => {
          if(data.items){
            return data.items;
          }
          return [];
        })
      );

  }

  private _filterDestination(name: string):GeneralItem[] {
    const filterValue = name.toLowerCase();

    return this.destinations_list?.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }


  openReceiverDialog(): void {
    const dialogRef = this.dialog.open(ReceiverComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  dateFilter(date):boolean{
    let odate = this.dataForm.controls.other['controls'].date.value;
    if(odate){
      return odate.format('MM/DD/YYYY') == date.format('MM/DD/YYYY') || new Date(date.format('MM/DD/YYYY')) >= new Date(this.minDate.format('MM/DD/YYYY'));
    } else {
      return new Date(date.format('MM/DD/YYYY')) >= new Date(this.minDate.format('MM/DD/YYYY'));
    }

  }
}
