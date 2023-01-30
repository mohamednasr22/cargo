import { Component, OnInit, SimpleChanges, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { ImageComponent } from '../../../shared/modal/image/image.component';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { GeneralItem } from '../../../models/GeneralItem';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { ManagerService } from '../../../shared/services/manager.service';
import { ContainerService } from '../../../shared/services/container.service';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Shipment } from '../../../models/shipment';
import { Observable , of as observableOf, Subject, merge } from 'rxjs';
import { ShipmentService } from '../../../shared/services/shipment.service';
import { startWith, map, tap, debounceTime, switchMap, catchError } from 'rxjs/operators';
import { AuthenticationService } from '../../../services/authentication.service';
import { environment } from '../../../../environments/environment';
import { SignatureFormComponent } from '../../../shared/component/signature-form/signature-form.component';

import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';


@Component({
  selector: 'app-createcontainer',
  templateUrl: './createcontainer.component.html',
  styleUrls: ['./createcontainer.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],

})
export class CreatecontainerComponent implements OnInit {

  @ViewChild('itemTemplate') itemTemplate: TemplateRef<any>;

  gallery_items: GalleryItem[];

  lightboxRef = null;


  containerHistory = [];

  history_files = [];

  minDate = moment();
  minEtaDate = moment();

  shipper_signatures = {};

  shippersList:FormControl = new FormControl([]);

  shipments_source: Shipment[] = [];
  original_shipments_source: Shipment[] = [];

  shipments_list: string[] = [];

  shipments_ids = {};

  filteredShipments: Observable<Shipment[]>;

  submitted = false;

  container_statuses:GeneralItem[] = [];

  dataForm:FormGroup;


  percentCompleted:number = 0;
  isUploaded:boolean = false;

  formData:FormData;

  panelOpenState = false;

  containerId: number;
  editMode:boolean = false;
  private sub: any;
  pms:any = {};

  container_shippers = [];

  couriers = [];

  callSubject:Subject<void>;

  sendingRequest:boolean = false;

  isLoadingResults = true;
  isRateLimitReached = false;
  resultsLength = 0;
  pageSize = 20;

  searchTerms = {
    shipment_id : ''
  };

  loaded = false;


  constructor(private _snackBar: MatSnackBar , private router: Router,public dialog: MatDialog , private route: ActivatedRoute , private fb:FormBuilder,private _manager:ManagerService , private containerService:ContainerService , private shipmentService:ShipmentService , private auth:AuthenticationService,public gallery: Gallery, public lightbox: Lightbox) {
    if(auth.currentUserValue.permission){
      this.pms = auth.currentUserValue.permission.container;
    }
  }


  ngOnChanges(changes: SimpleChanges): void {

  }



  ngOnInit(): void {


    this.resetForm();

    this.activeNavigation();


    /*
    this.shipmentService.getShipments().subscribe(data => {
      if(data){
        this.shipments_source = data.items;
      }


    });
    */

    this.lightboxRef = this.gallery.ref('lightbox');

    this.lightboxRef.setConfig({
      imageSize: ImageSize.Contain,
      thumbPosition: ThumbnailsPosition.Top,
      itemTemplate: this.itemTemplate,
      gestures: false
    });

  }

  activeNavigation(){
    this.shipmentService!.getShipments({page : 1 , filter : Object.keys(this.searchTerms).map(key => key + '___' + this.searchTerms[key]).join('|')})
    .pipe(
      map(data => {
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        this.resultsLength = data.total;
        return data.items;

      }),
      catchError(() => {
        this.isLoadingResults = false;
        this.isRateLimitReached = true;
        return observableOf([]);
      })
    ).subscribe(data => {
      this.original_shipments_source = data;
      this.shipments_source = data;
      if(!this.loaded){
        this._manager.getContainerStatuses().subscribe(data => {
          this.loaded = true;
          if(data){
            this.container_statuses = data.data.filter(item => this.pms.statuses.indexOf(item.id) !== -1);
            this.dataForm.patchValue({
              history : {
                container_status_id : this.container_statuses[0].id
              }
            });
          }
          this._manager.getCouriers().subscribe(data => {
            if(data){
              this.couriers = data.data;
              this.dataForm.patchValue({
                container : {
                  courier : this.couriers[0].id
                }
              });
            }

            this.handleParams();
          });
        });
      }
    });
  }

  handleParams(){
    this.sub = this.route.params.subscribe(params => {
      this.containerId = +params['id'];
      if(!isNaN(this.containerId)){
        this.editMode =true;
        this.getContainer(this.containerId);
      } else {
        this.editMode =false;
        this.containerHistory = null;
        this.containerId = null;
      }
    });
  }

  loadShippers(){
    if(!this.containerId) return;
    const fdata:FormData = new FormData();
    fdata.append('container_id',this.containerId.toString());
    this.containerService.getContainerShippers(fdata).subscribe(data => {
      if(data){
        if(data.data){
          this.container_shippers = data.data;
        }
      }
    });
  }

  checkSentStatus(element){
    return this.shipper_signatures[`${element.shipper_id}-${element.shipment_id}`] && this.shipper_signatures[`${element.shipper_id}-${element.shipment_id}`].user_signed == "1";
  }

  sendSignatureRequest(_shipper){


    const dialogRef = this.dialog.open(SignatureFormComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.sendingRequest = true;
        const fdata:FormData = new FormData();
        let copyShippermData = JSON.parse(JSON.stringify({shipper : _shipper}));
        this.jsonToFormData(fdata,copyShippermData);
        if(this.containerId){
          fdata.append('container_id' , this.containerId.toString());
        }
        fdata.append('form' , JSON.stringify(result));
        fdata.append('home' , environment.home);
        this.containerService.requestSignature(fdata).subscribe(data => {
          this.sendingRequest = false;
          if(data.signatures){
            this.shippersList.setValue([]);
            data.signatures.forEach(element => {
              this.shipper_signatures[`${element.shipper_id}-${element.shipment_id}`] = element;
            });
          }
        });
      }
    });

    /*
    if(this.shippersList.value.length == 0) return;
    this.sendingRequest = true;

    const fdata:FormData = new FormData();
    let copyFormData = JSON.parse(JSON.stringify({shippers : this.shippersList.value}));

    this.jsonToFormData(fdata,copyFormData);
    if(this.containerId){
      fdata.append('container_id' , this.containerId.toString());
    }
    fdata.append('home' , environment.home);
    this.containerService.requestSignature(fdata).subscribe(data => {
      this.sendingRequest = false;
      if(data.signatures){
        this.shippersList.setValue([]);
        data.signatures.forEach(element => {
          this.shipper_signatures[element.shipper_id] = element;
        });
      }
    });
    */
  }

  resetForm(){
    this.shipments_ids = {};
    this.shipments_list = [];

    this.dataForm = this.fb.group({
      container : this.fb.group({
        container_no : ['',Validators.required],
        booking_no : ['',Validators.required],
        port_of_loading : ['',Validators.required],
        port_of_discharge : ['', Validators.required],
        sailing_date : [moment(),Validators.required],
        courier : ['',Validators.required],
        eta : [moment(),Validators.required],
      }),
      other : this.fb.group({
        shipment_id : [''],
      }),
      history : this.fb.group({
        container_status_id : [''],
        note : [''],
        file : ['']
      }),
      shipments : this.fb.array([])
    });

    this.filteredShipments = this.dataForm.get("other").get('shipment_id').valueChanges
    .pipe(
      startWith(''),
      debounceTime(500),
      switchMap(value => this._filter(value))
      /*
      map(value => typeof value === 'string' ? value : value.shipment_id),
      map(name => {
        return name ? this._filterShipments(name) : this.shipments_source?.slice()
      })
      */
    );

  }

  _filter(value){
    this.searchTerms.shipment_id = value;
    return this.shipmentService!.getShipments({page : 1 , filter : Object.keys(this.searchTerms).map(key => key + '___' + this.searchTerms[key]).join('|')})
    .pipe(
      map((data) => {
        return data.items.filter(item => item.shipment_id.toString().includes(value));
      })
    )
  }

  getContainer(id){
    const fdata:FormData = new FormData();
    fdata.append('container_id',id);
    this.containerService.getContainer(fdata).subscribe(data => {
      if(data){
        if(data.data){
          const containerData = data.data.data;
          const hisData = data.data.history;
          const shipData = data.data.shipments;

          this.containerHistory = hisData;

          if(data.data.signatures){
            data.data.signatures.forEach(element => {
              this.shipper_signatures[`${element.shipper_id}-${element.shipment_id}`] = element;
            });
          }
          this.dataForm.patchValue({
            container : {
              container_no : containerData.container_no,
              booking_no : containerData.booking_no,
              port_of_loading : containerData.port_of_loading,
              port_of_discharge : containerData.port_of_discharge,
              sailing_date : moment(new Date(containerData.sailing_date)),
              courier : containerData.courier,
              eta : moment(new Date(containerData.eta))
            }
          });
          if(moment(new Date(containerData.sailing_date)) < this.minDate){
            //this.minDate = moment(new Date(containerData.sailing_date));
          }
          if(moment(new Date(containerData.eta)) < this.minEtaDate){
            //this.minEtaDate = moment(new Date(containerData.eta));
          }


          for(let i = 0 ; i < shipData.length ; i++){
            this.shipmentArray.push(this.fb.group({
              shipment_id:[shipData[i].shipment_id]
            }));
            this.shipments_list.push(shipData[i].shipment_id);
          }


        }
      }

    });
  }


  dateHandler(type: string, event: MatDatepickerInputEvent<Date>) {
    this.dataForm.get("container").get('date').setValue(moment(event.value).format('MM/DD/YYYY'));
  }

  onFileChange(event)  {
    //this.dataForm.get("history").get('file').setValue(event.target.files[0]);
    this.history_files = [];
    for (var i = 0; i < event.target.files.length; i++) {
      this.history_files.push(event.target.files[i]);
    }

  }

  deleteShipment(index){
    this.shipmentArray.removeAt(index);
  }


  get shipmentArray(){
    return this.dataForm.get('shipments') as FormArray;
  }

  addShipment(option){
    if(!this.shipments_ids[option]){
      this.shipments_ids[option] = option;
      this.shipments_list.push(option);
      this.shipmentArray.push(this.fb.group({
        shipment_id : [option]
      }));
    }
  }

  displayShipments(item: Shipment): string {
    return item && item.shipment_id ? item.shipment_id.toString() : '';
  }

  private _filterShipments(item: string): Shipment[] {
    this.searchTerms.shipment_id = item ? item : '';

    return this.shipments_source?.filter(option => option.shipment_id.toString().indexOf(item) === 0);
  }

  onShipmentSelectionChanged($event):any{
    const shpdata = $event.option.value;
    this.addShipment(shpdata);
  }



  removeShipment(index){
    const selectedId = this.shipments_list[index];
    delete this.shipments_ids[selectedId];
    this.shipments_list.splice(index,1);
    this.shipmentArray.removeAt(index);
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
    //copyFormData.history.file = this.dataForm.get("history").get("file").value;
    this.jsonToFormData(formData,copyFormData);

    for (var i = 0; i < this.history_files.length; i++) {
      formData.append("history_files[]", this.history_files[i]);
    }

    if(this.containerId){
      formData.append('container_id',this.containerId.toString());
    }

    formData.append('container_link',`${environment.home}admin/containers/info/`);

    this.containerService.saveContainer(formData).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.percentCompleted = Math.round(100 * event.loaded  / event.total);
      } else if (event instanceof HttpResponse) {
        this.isUploaded = true;
        this.submitted = false;
        this.openSnackBar('Data submited successfully','');
        this.router.navigate(["/admin/containers/list"]);
      }
    }, error => {
      this.submitted = false;
      this.openSnackBar('Something wrong happen!','');
      //this.router.navigate(["/admin/containers/list"]);
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

  openGallery(_item){
    if(_item.file.length > 0){
      this.gallery_items = _item.file.map(item => new ImageItem({ src: item, thumb: item }));


      this.lightboxRef.load(this.gallery_items);
      //this.lightbox.open(0);
      this.lightbox.open(0, 'lightbox', {panelClass: 'fullscreen'});
    }


  }

  dateSailingFilter(date):boolean{
    let odate = this.dataForm.controls.container['controls'].sailing_date.value;
    if(odate){
      return odate.format('MM/DD/YYYY') == date.format('MM/DD/YYYY') || new Date(date.format('MM/DD/YYYY')) >= new Date(this.minDate.format('MM/DD/YYYY'));
    } else {
      return new Date(date.format('MM/DD/YYYY')) >= new Date(this.minDate.format('MM/DD/YYYY'));
    }

  }


  dateEtaFilter(date):boolean{
    let odate = this.dataForm.controls.container['controls'].eta.value;
    if(odate){
      return odate.format('MM/DD/YYYY') == date.format('MM/DD/YYYY') || new Date(date.format('MM/DD/YYYY')) >= new Date(this.minEtaDate.format('MM/DD/YYYY'));
    } else {
      return new Date(date.format('MM/DD/YYYY')) >= new Date(this.minEtaDate.format('MM/DD/YYYY'));
    }

  }






}
