import { Component, OnInit, SimpleChanges, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { GeneralItem } from '../../../models/GeneralItem';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ManagerService } from '../../../shared/services/manager.service';
import { InvoiceService } from '../../../shared/services/invoice.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import * as moment from 'moment';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { ImageComponent } from '../../../shared/modal/image/image.component';
import { HttpEventType, HttpResponse } from '@angular/common/http';

import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import { ContainerService } from '../../../shared/services/container.service';
import { MatTableDataSource } from '@angular/material/table';
import { Container } from '../../../models/container';
import { Observable , of as observableOf, of } from 'rxjs';
import { startWith, map, catchError, debounceTime, switchMap } from 'rxjs/operators';
import { AuthenticationService } from '../../../services/authentication.service';

import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
import { User } from '../../../models/user';
import { ShipperService } from '../../../shared/services/shipper.service';
import { Shipper } from '../../../models/shipper';

@Component({
  selector: 'app-createaccounting',
  templateUrl: './createaccounting.component.html',
  styleUrls: ['./createaccounting.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class CreateaccountingComponent implements OnInit {

  @ViewChild('itemTemplate') itemTemplate: TemplateRef<any>;

  @ViewChild('content', { read: ElementRef }) content:ElementRef;

  exportAsConfig:ExportAsConfig = {
    type: 'pdf',
    elementIdOrContent: 'content'
  };

  minDate = moment();

  gallery_items: GalleryItem[];

  lightboxRef = null;

  dataHistory = [];

  submitted = false;

  filteredShippers: Observable<Shipper[]>;

  shippers_list: Shipper[] = [];


  dataSource:MatTableDataSource<Container> = new MatTableDataSource<Container>();

  containers_list: Container[] = [];
  original_containers_list: Container[] = [];

  filteredContainers: Observable<Container[]>;

  invoice_statuses:GeneralItem[] = [];
  invoice_types:GeneralItem[] = [];

  dataForm:FormGroup;


  percentCompleted:number = 0;
  isUploaded:boolean = false;

  formData:FormData;


  invoiceId: number;
  editMode:boolean = false;

  searchTerms = {
    container_no : ''
  };

  searchShipperTerms = {
    name : ''
  };

  isLoadingResults = true;
  isRateLimitReached = false;
  resultsLength = 0;
  loaded = false;

  userNameCtrl:FormControl = new FormControl('');
  filterUsers: Observable<User[]>;
  users_list: User[] = [];

  private sub: any;

  permission:any;


  constructor(private exportAsService: ExportAsService,private _snackBar: MatSnackBar , private router: Router,public dialog: MatDialog , private route: ActivatedRoute , private fb:FormBuilder,private _manager:ManagerService , private shipperService:ShipperService , private containerService:ContainerService , private auth:AuthenticationService , private invoiceService:InvoiceService , public gallery: Gallery, public lightbox: Lightbox) {
    if(auth.currentUserValue.permission){
      this.permission = auth.currentUserValue.permission.accounting;
    }
  }


  ngOnChanges(changes: SimpleChanges): void {

  }



  ngOnInit(): void {


    this.resetForm();

    this.activeNavigation();






    this.sub = this.route.params.subscribe(params => {
      this.invoiceId = +params['id'];
      if(!isNaN(this.invoiceId)){
        this.editMode =true;
        this.getInvoice(this.invoiceId);
      } else {
        this.editMode =false;
        this.dataHistory = null;
        this.invoiceId = null;
        this.resetForm();
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

  private _filterUser(name: string): User[] {
    const filterValue = name.toLowerCase();
    return this.users_list?.filter(option => (option.firstname + ' ' + option.lastname).toLowerCase().indexOf(filterValue) === 0);
  }

  activeNavigation(){
    this.containerService!.getContainers({page : 1 , filter : Object.keys(this.searchTerms).map(key => key + '___' + this.searchTerms[key]).join('|')})
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

      this.original_containers_list = data;
      this.containers_list = data;

      if(!this.loaded){
        this.loaded = true;
        this._manager.getInvoiceStatuses().subscribe(data => {
          if(data){
            this.invoice_statuses = data.data;
          }

          this._manager.getInvoiceTypes().subscribe(data => {
            if(data){
              this.invoice_types = data.data;
            }

            this.auth.getUsers().subscribe(data => {
              if(data){
                if(data){
                  this.users_list = data.data;
                  this.activeUsers();
                }
              }

              this.shipperService.getShippers().subscribe(data => {
                if(data){
                    this.shippers_list = data.items;
                }
                this.activeShippers();
              });


            });

          });

        });
      }
    });
  }

  activeShippers(){
    this.filteredShippers = this.dataForm.get("invoice").get('name').valueChanges
    .pipe(
      startWith(''),
      debounceTime(500),
      map(value => typeof value === 'string' ? value : value.name),
      switchMap((value) => value ? this._filterShipper(value) : of(this.shippers_list?.slice()))
    );
  }

  displayContainer(data): string {
    return data && data.container_no ? data.container_no : data;
  }

  onContainerSelectionChanged($event):any{
    const cntdata = $event.option.value;
    this.dataForm.patchValue({
      invoice : {
        container_no : cntdata.container_no,
        booking_no : cntdata.booking_no
      }
    });
  }

  activeContainers(){
    this.filteredContainers = this.dataForm.get("invoice").get('container_no').valueChanges
    .pipe(
      startWith(''),
      debounceTime(500),
      switchMap(value => this._filter(value))
      /*
      map(value => typeof value === 'string' ? value : value.container_no),
      map(value => value ? this._filterContainer(value) : this.containers_list?.slice())
      */
    );
  }

  _filter(value){
    this.searchTerms.container_no = value;
    return this.containerService!.getContainers({page : 1 , filter : Object.keys(this.searchTerms).map(key => key + '___' + this.searchTerms[key]).join('|')})
    .pipe(
      map((data) => {
        if(data.items){
          return data.items.filter(item => item.container_no.toLowerCase().includes(value.toLowerCase()));
        }
        return [];
      })
    )
  }

  resetForm(){
    this.dataForm = this.fb.group({
      invoice : this.fb.group({
        container_ctrl : [''],
        shipper_id : [''],
        name : [''],
        container_no : ['',Validators.required],
        booking_no : ['',Validators.required],
        invoice_no : ['',Validators.required],
        invoice_type_id : ['', Validators.required],
        amount : ['',Validators.required],
        paid : ['0',Validators.required],
      }),
      history : this.fb.group({
        date : [moment()],
        note : [''],
        file : ['']
      })
    });

    this.activeContainers();

  }

  private _filterContainer(value: string): Container[] {
    const filterValue = value.toLowerCase();

    return this.containers_list?.filter(option => option.container_no.toLowerCase().indexOf(filterValue) === 0);
  }

  displayUsers(item: User): string {

    return item && item.firstname ? (item.firstname + ' ' + item.lastname) : '';
  }

  getInvoice(id){
    const fdata:FormData = new FormData();
    fdata.append('invoice_id',id);
    this.invoiceService.getInvoice(fdata).subscribe(data => {
      if(data){
        if(data.data){
          const invoiceData = data.data.data;
          const userData = data.data.user;
          const hisData = data.data.history;

          this.dataHistory = hisData;

          this.dataForm.patchValue({
            invoice : {
              shipper_id : invoiceData.shipper_id,
              name : invoiceData.name ? invoiceData.name : '',
              container_no : invoiceData.container_no,
              booking_no : invoiceData.booking_no,
              invoice_no : invoiceData.invoice_no,
              invoice_type_id : invoiceData.invoice_type_id,
              amount : invoiceData.amount,
              paid : invoiceData.paid
            }
          });

          this.userNameCtrl.setValue(userData);

        }
      }

    });
  }

  onShipperSelectionChanged($event):any{
    const shpdata = $event.option.value;
    this.dataForm.patchValue({
      invoice : {
        shipper_id : shpdata.shipper_id,
        name : shpdata.name
      }
    });
  }

  displayShipper(user?: Shipper): string {
    return user && user.name ? user.name : '';
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


  dateHandler(type: string, event: MatDatepickerInputEvent<Date>) {
    this.dataForm.get("invoice").get('date').setValue(moment(event.value).format('MM/DD/YYYY'));
  }

  onFileChange(event)  {
    this.dataForm.get("history").get('file').setValue(event.target.files[0]);
  }




  openImage(url){
    if(url != ''){
      this.gallery_items = [url].map(item => new ImageItem({ src: item, thumb: item }));
      this.lightboxRef.load(this.gallery_items);
      this.lightbox.open(0, 'lightbox', {panelClass: 'fullscreen'});
    }
  }

  onUserSelectionChanged($event):any{
    const userData = $event.option.value;
    this.userNameCtrl.setValue(userData);
  }

  submitForm(){
    this.submitted = true;
    let formData:FormData = new FormData();
    let copyFormData = JSON.parse(JSON.stringify(this.dataForm.value));
    copyFormData.history.file = this.dataForm.get("history").get("file").value;
    this.jsonToFormData(formData,copyFormData);

    if(this.invoiceId){
      formData.append('invoice_id',this.invoiceId.toString());
    }

    if(this.userNameCtrl.value){
      formData.append('assigned_user_id',this.userNameCtrl.value.user_id);
    }

    this.invoiceService.saveInvoice(formData).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.percentCompleted = Math.round(100 * event.loaded  / event.total);
      } else if (event instanceof HttpResponse) {
        this.isUploaded = true;
        this.submitted = false;
        this.openSnackBar('Data submited successfully','');
        this.router.navigate(["/admin/accountings/list"]);
      }
    }, error => {
      this.submitted = false;
      this.openSnackBar('Something wrong happen!','');
      //this.router.navigate(["/admin/accountings/list"]);
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

  savePDF() {
    document.body.classList.add('print_mode');
    this.exportAsService.save(this.exportAsConfig, 'invoice_' + this.invoiceId).subscribe(() => {
      setTimeout(()=>{document.body.classList.remove('print_mode');},1000);
    });
  }

  printPage(){
    window.print();
  }

}
