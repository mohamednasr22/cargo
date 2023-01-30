import { Component, OnInit, ViewChild, TemplateRef, ElementRef, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { FilesComponent } from '../../../shared/component/files/files.component';
import { ShipmentService } from '../../../shared/services/shipment.service';
import { Shipment } from '../../../models/shipment';
import { GeneralItem } from '../../../models/GeneralItem';
import { ManagerService } from '../../../shared/services/manager.service';
import { ConfirmComponent } from '../../../shared/modal/confirm/confirm.component';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';

import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';

import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { merge , of as observableOf, Subject } from 'rxjs';
import { startWith, switchMap, map, catchError, tap, debounceTime, debounce } from 'rxjs/operators';
import { ShipmentnotesComponent } from '../../../shared/shipmentnotes/shipmentnotes.component';



@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.scss']
})
export class ShipmentsComponent implements OnInit , AfterViewInit {


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  @ViewChild('itemTemplate') itemTemplate: TemplateRef<any>;

  expandedElement: Shipment | null;


  @ViewChild('content', { read: ElementRef }) content:ElementRef;

  exportAsConfig:ExportAsConfig = {
    type: 'pdf',
    elementIdOrContent: 'content'
  };

  callSubject:Subject<void>;

  gallery_items: GalleryItem[];

  lightboxRef = null;

  warehouses_list:GeneralItem[] = [];

  shippment_statuses:GeneralItem[] = [];
  shipmentStatusId:FormControl = new FormControl('');
  warehouseId:FormControl = new FormControl('');
  shipmentVehicle:FormControl = new FormControl('');
  shipmentVehicleValue:FormControl = new FormControl('');
  shipperName:FormControl = new FormControl();
  dateCtrl:FormControl = new FormControl();
  descriptionCtrl:FormControl = new FormControl();
  receiverName:FormControl = new FormControl();
  destinationName:FormControl = new FormControl();
  trackingId:FormControl = new FormControl();

  isLoadingResults = true;
  isRateLimitReached = false;
  resultsLength = 0;
  pageSize = 20;

  searchTerms = {
    shipper_name : '',
    date : '',
    receiver_name : '',
    description : '',
    shipment_status_id : '',
    warehouse_id : '',
    package_type : '',
    package_value : '',
    destination_name : '',
    shipment_id : ''
  }

  loaded:boolean = false;

  pms:any = {};

  userId = 0;

  pending_status_id = 0;

  displayedColumns: string[] = ['shipment_id','receiver_name' , 'destination_name','container_no','title','akey','status','container_type','files','image','view','update','delete'];
  dataSource:MatTableDataSource<Shipment> = new MatTableDataSource<Shipment>();
  selection = new SelectionModel<Shipment>(true, []);

  constructor(private exportAsService: ExportAsService,private router: Router , public dialog: MatDialog , private shipmentService:ShipmentService , private _manager:ManagerService , private auth:AuthenticationService , public gallery: Gallery, public lightbox: Lightbox) {
    this.pending_status_id = this.auth.currentUserValue.pending_status_id;
    if(auth.currentUserValue.permission){
      this.userId = auth.currentUserValue.user_id;
      this.pms = auth.currentUserValue.permission.shipment;
      let filteredPermission = ['shipment_id'];
      if(this.pms.view_shipper){
        filteredPermission.push('shipper_name');
      }
      filteredPermission.push('receiver_name' , 'description' , 'date' , 'destination_name', 'warehouse_name','container_no');
      filteredPermission.push('title','akey','status','container_type','note');

      if(this.pms.view){
        filteredPermission.push('view');
      }
      filteredPermission.push('actions');
      /*
      if(this.pms.update){
        filteredPermission.push('update');
      }
      if(this.pms.delete){
        filteredPermission.push('delete');
      }
      */



      this.displayedColumns = filteredPermission;
    }

  }

  resetFilter(){
    this.searchTerms = {
      shipper_name : '',
      date : '',
      receiver_name : '',
      description : '',
      shipment_status_id : '',
      warehouse_id : '',
      destination_name : '',
      package_type : '',
      package_value : '',
      shipment_id : ''
    };
    this.warehouseId.setValue('');
    this.shipmentStatusId.setValue('');
    this.warehouseId.setValue('');
    this.shipmentVehicle.setValue('');
    this.shipmentVehicleValue.setValue('');
    this.shipperName.setValue('');
    this.descriptionCtrl.setValue('');
    this.dateCtrl.setValue('');
    this.receiverName.setValue('');
    this.destinationName.setValue('');
    this.trackingId.setValue('');

    this.paginator.pageIndex = 0;
    this.callSubject.next();

  }

  deleteShipment(id){
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: { title : 'Are you sure?' , id : id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        const fdata:FormData = new FormData();
        fdata.append('shipment_id',result);
        this.shipmentService.deleteShipment(fdata).subscribe(data => {
          this.dataSource.data = this.dataSource.data.filter(row => row.shipment_id != result);
        });
      }

    });
  }



  ngOnInit() {
    this.callSubject = new Subject();
    this.callSubject.pipe(
      tap(() => {
        this.isLoadingResults = true;
      }),
      debounceTime(500)
    ).subscribe(() => {
      this.activeNavigation();
    });

    this.trackingId.valueChanges.subscribe(data => {
      this.searchTerms.shipment_id = data;
      this.applyFilter(data);
    });

    this.shipperName.valueChanges.subscribe(data => {
      this.searchTerms.shipper_name = data;
      this.applyFilter(data);
    });

    this.dateCtrl.valueChanges.subscribe(data => {
      this.searchTerms.date = data ? moment(new Date(data)).format('YYYY-MM-DD') : '';
      this.applyFilter(this.searchTerms.date);
    });

    this.descriptionCtrl.valueChanges.subscribe(data => {
      this.searchTerms.description = data;
      this.applyFilter(this.searchTerms.description);
    });

    this.receiverName.valueChanges.subscribe(data => {
      this.searchTerms.receiver_name = data;
      this.applyFilter(data);
    });

    this.destinationName.valueChanges.subscribe(data => {
      this.searchTerms.destination_name = data;
      this.applyFilter(data);
    });

    this.warehouseId.valueChanges.subscribe(data => {
      this.searchTerms.warehouse_id = data;
      this.applyFilter(data);
    });


    this.shipmentStatusId.valueChanges.subscribe(data => {
      this.searchTerms.shipment_status_id = data;
      this.applyFilter(data);
    });

    this.shipmentVehicle.valueChanges.subscribe(data => {
      this.searchTerms.package_type = data;
      this.applyFilter(data);
    });

    this.shipmentVehicleValue.valueChanges.subscribe(data => {
      this.searchTerms.package_value = data;
      this.applyFilter(data);
    });

    this.dataSource.filterPredicate = (data, filter):boolean => {
      let pass_package = true;
      if(this.searchTerms.package_type){
        if(this.searchTerms.package_type == '0'){
          pass_package = true;
        } else {
          for(let oi = 0 ; oi < data.packages.length ; oi++){
            if(data.packages[oi][this.searchTerms.package_type]){
              if(data.packages[oi][this.searchTerms.package_type].toString().toLowerCase().indexOf(this.searchTerms.package_value) !== -1){
                pass_package = true;
              } else {
                pass_package = false;
              }
            } else {
              pass_package = false;
            }
          }
        }
      }
      return (data.shipper_name && data.shipper_name.toLowerCase().indexOf(this.searchTerms.shipper_name) !== -1)
        && data.shipment_id.toString().toLowerCase().indexOf(this.searchTerms.shipment_id) !== -1
        && data.warehouse_id.toString().toLowerCase().indexOf(this.searchTerms.warehouse_id) !== -1
        && (data.receiver_name && data.receiver_name.toString().toLowerCase().indexOf(this.searchTerms.receiver_name) !== -1)
        && data.shipment_status_id.toString().toLowerCase().indexOf(this.searchTerms.shipment_status_id) !== -1
        && (data.destination_name && data.destination_name.toLowerCase().indexOf(this.searchTerms.destination_name) !== -1) && pass_package;
    };


    this.lightboxRef = this.gallery.ref('lightbox');

    this.lightboxRef.setConfig({
      imageSize: ImageSize.Contain,
      thumbPosition: ThumbnailsPosition.Top,
      itemTemplate: this.itemTemplate,
      gestures: false
    });

  }

  ngAfterViewInit(){
    this.activeNavigation();
  }

  activeNavigation(){
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.shipmentService!.getShipments({sort : this.sort.active, order : this.sort.direction , pagesize : this.paginator.pageSize, page : this.paginator.pageIndex + 1 , filter : Object.keys(this.searchTerms).map(key => key + '___' + this.searchTerms[key]).join('|')});
        }),
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
        this.dataSource.data = data;
        if(!this.loaded){
          this._manager.getShipmentStatuses().subscribe(data => {
            if(data){
              this.shippment_statuses = data.data;
            }
            this._manager.getWarehouses().subscribe(data => {
              if(data){
                this.warehouses_list = data.data;
              }
              this.loaded = true;

              setTimeout(() => {
                this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
                /*
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
                */
              }, 0);

            });
          });
        } else {

        }
      });


  }

  applyFilter(val) {
    let filterValue = val.toString();
    this.paginator.pageIndex = 0;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.callSubject.next();
    //this.dataSource.filter = filterValue;
  }




  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Shipment): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.shipment_id}`;
  }

  openPhoto(_shipment_id):void{

    let formData:FormData = new FormData();
      formData.append('shipment_id',_shipment_id);
      this.shipmentService.getShipmentHistory(formData).subscribe(data => {
        if(data){
          let _dataImages = [];
          for(let i = 0 ; i < data.data.length; i++){
            let files = data.data[i].file;
            if(files && files.length > 0){
              for(let j = 0 ; j < files.length; j++){

                _dataImages.push(files[j]);
              }
            }

            //this.images.push({path : data.data[i].file});
          }
          if(_dataImages.length > 0){
            this.gallery_items = _dataImages.map(item => new ImageItem({ src: item, thumb: item }));
            this.lightboxRef.load(this.gallery_items);
            this.lightbox.open(0, 'lightbox', {panelClass: 'fullscreen'});
          }

        }
      });

    /*
    const dialogRef = this.dialog.open(GalleryComponent, {
      data: {shipment_id : $shipment_id}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
    */
  }

  updateNotes(item){
    const dialogRef = this.dialog.open(ShipmentnotesComponent, {
      data: {item : item}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openFiles($shipment_id):void{
    const dialogRef = this.dialog.open(FilesComponent, {
      data: {shipment_id : $shipment_id}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  savePDF() {
    document.body.classList.add('print_mode');
    this.exportAsService.save(this.exportAsConfig, 'shipments').subscribe(() => {
      setTimeout(()=>{document.body.classList.remove('print_mode');},1000);
    });
  }

  printPage(){
    window.print();
  }

}
