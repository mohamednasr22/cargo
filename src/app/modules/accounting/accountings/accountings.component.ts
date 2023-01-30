import { Component, OnInit, ViewChild, TemplateRef, ElementRef, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { Observable , of as observableOf, Subject, merge } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {map, startWith, tap, debounceTime, switchMap, catchError} from 'rxjs/operators';
import { GalleryComponent } from '../../../shared/component/gallery/gallery.component';
import { GeneralItem } from '../../../models/GeneralItem';
import { AccountingItem } from '../../../models/accounting';
import { ManagerService } from '../../../shared/services/manager.service';
import { InvoiceService } from '../../../shared/services/invoice.service';
import { ConfirmComponent } from '../../../shared/modal/confirm/confirm.component';
import { FilesComponent } from '../../../shared/component/files/files.component';
import { AuthenticationService } from '../../../services/authentication.service';


import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';

import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-accountings',
  templateUrl: './accountings.component.html',
  styleUrls: ['./accountings.component.scss']
})
export class AccountingsComponent implements OnInit , AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild('itemTemplate') itemTemplate: TemplateRef<any>;

  @ViewChild('content', { read: ElementRef }) content:ElementRef;

  exportAsConfig:ExportAsConfig = {
    type: 'pdf',
    elementIdOrContent: 'content'
  };

  gallery_items: GalleryItem[];

  lightboxRef = null;

  loaded = false;
  invoice_statuses:GeneralItem[] = [];
  invoice_types:GeneralItem[] = [];
  invoiceStatusId:FormControl = new FormControl('');
  bookingNo:FormControl = new FormControl();
  containerNo:FormControl = new FormControl();
  invoiceNo:FormControl = new FormControl();
  invoiceTypeId:FormControl = new FormControl();

  isLoadingResults = true;
  isRateLimitReached = false;
  resultsLength = 0;
  resultsTotalAmount = 0;
  resultsTotalPaid = 0;
  pageSize = 20;

  callSubject:Subject<void>;

  searchTerms = {
    booking_no : '',
    container_no : '',
    invoice_status_id : '',
    invoice_type_id : '',
    invoice_no : ''
  };
  pms:any = {};
  displayedColumns: string[] = ['booking_no' , 'container_no', 'invoice_no' , 'invoice_type', 'amount', 'files','image','update','delete'];
  dataSource:MatTableDataSource<AccountingItem> = new MatTableDataSource<AccountingItem>();

  constructor(private exportAsService: ExportAsService,public dialog: MatDialog , private _manager:ManagerService , private invoiceService:InvoiceService, private auth:AuthenticationService , public gallery: Gallery, public lightbox: Lightbox) {
    if(auth.currentUserValue.permission){
      this.pms = auth.currentUserValue.permission.accounting;
      let filteredPermission = ['name' , 'booking_no' , 'container_no', 'invoice_no' , 'date_added' , 'invoice_type', 'amount', 'paid' , 'balance', 'files','image'];

      if(this.pms.update){
        filteredPermission.push('update');
      }
      if(this.pms.delete){
        filteredPermission.push('delete');
      }
      this.displayedColumns = filteredPermission;
    }

    /*
    this.invoiceService.getInvoices().subscribe(data => {
      if(data){
        if(data.data){
          this.dataSource.data = data.data;
        }
      }
      this._manager.getInvoiceStatuses().subscribe(data => {
        if(data){
          this.invoice_statuses = data.data;
        }
        this._manager.getInvoiceTypes().subscribe(data => {
          if(data){
            this.invoice_types = data.data;
          }
          this.loaded = true;
        });
      });
    });

    */






    this.bookingNo.valueChanges.subscribe(data => {
      this.searchTerms.booking_no = data;
      this.applyFilter(data);
    });

    this.containerNo.valueChanges.subscribe(data => {
      this.searchTerms.container_no = data;
      this.applyFilter(data);
    });

    this.invoiceNo.valueChanges.subscribe(data => {
      this.searchTerms.invoice_no = data;
      this.applyFilter(data);
    });

    this.invoiceTypeId.valueChanges.subscribe(data => {
      this.searchTerms.invoice_type_id = data;
      this.applyFilter(data);
    });

    this.invoiceStatusId.valueChanges.subscribe(data => {
      this.searchTerms.invoice_status_id = data;
      this.applyFilter(data);
    });

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

  ngOnInit(): void {

    this.callSubject = new Subject();
    this.callSubject.pipe(
      tap(() => {
        this.isLoadingResults = true;
      }),
      debounceTime(500)
    ).subscribe(() => {
      this.activeNavigation();
    });

    /*

    this.dataSource.filterPredicate = (data, filter):boolean => {
      return data.booking_no.toLowerCase().indexOf(this.searchTerms.booking_no) !== -1
        && data.container_no.toString().toLowerCase().indexOf(this.searchTerms.container_no) !== -1
        && data.booking_no.toString().toLowerCase().indexOf(this.searchTerms.booking_no) !== -1
        && data.invoice_no.toLowerCase().indexOf(this.searchTerms.invoice_no) !== -1
        && data.invoice_status_id.toLowerCase().indexOf(this.searchTerms.invoice_status_id) !== -1
        && data.invoice_type_id.toLowerCase().indexOf(this.searchTerms.invoice_type_id) !== -1;
    }
    */
  }

  activeNavigation(){
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.invoiceService!.getInvoices({sort : this.sort.active, order : this.sort.direction, pagesize : this.paginator.pageSize, page : this.paginator.pageIndex + 1 , filter : Object.keys(this.searchTerms).map(key => key + '___' + this.searchTerms[key]).join('|')});
        }),
        map(data => {
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.total.total ? data.total.total : 0;
          this.resultsTotalAmount = data.total.amount ? data.total.amount : 0;
          this.resultsTotalPaid = data.total.paid ? data.total.paid : 0;
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
          this._manager.getInvoiceStatuses().subscribe(data => {
            if(data){
              this.invoice_statuses = data.data;
            }
            this._manager.getInvoiceTypes().subscribe(data => {
              if(data){
                this.invoice_types = data.data;
              }
              this.loaded = true;
              setTimeout(() => {
                this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
              }, 0);
            });
          });

          /*
          this._manager.getContainerStatuses().subscribe(data => {
            if(data){
              this.container_statuses = data.data;
            }
            this.loaded = true;
            setTimeout(() => {
              this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
            }, 0);
          });
          */
        }
      });
  }

  openPhoto(_invoice_id):void{

    let formData:FormData = new FormData();
    formData.append('invoice_id',_invoice_id);
    this.invoiceService.getInvoiceHistory(formData).subscribe(data => {
      if(data){
        console.log(data);
        let _dataImages = [];
        for(let i = 0 ; i < data.data.length; i++){
          if(data.data[i].file){
            _dataImages.push(data.data[i].file);
          }

        }
        if(_dataImages.length > 0){
          this.gallery_items = _dataImages.map(item => new ImageItem({ src: item, thumb: item }));
          this.lightboxRef.load(this.gallery_items);
          this.lightbox.open(0, 'lightbox', {panelClass: 'fullscreen'});
        }

      }
    });
  }

  applyFilter(val) {
    /*
    let filterValue = val;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    */
    let filterValue = val.toString();
    this.paginator.pageIndex = 0;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.callSubject.next();
  }

  resetFilter(){
    this.searchTerms = {
      booking_no : '',
      container_no : '',
      invoice_status_id : '',
      invoice_type_id : '',
      invoice_no : ''
    };

    this.invoiceNo.setValue('');
    this.invoiceStatusId.setValue('');
    this.invoiceTypeId.setValue('');
    this.containerNo.setValue('');
    this.bookingNo.setValue('');
    //this.dataSource.filter = '';

    this.paginator.pageIndex = 0;
    this.callSubject.next();
  }


  deleteInvoice(id){
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: { title : 'Are you sure?' , id : id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        const fdata:FormData = new FormData();
        fdata.append('invoice_id',result);
        this.invoiceService.deleteInvoice(fdata).subscribe(data => {
          this.dataSource.data = this.dataSource.data.filter(row => row.invoice_id != result);
        });
      }
    });
  }

  openFiles($invoice_id):void{
    const dialogRef = this.dialog.open(FilesComponent, {
      data: {invoice_id : $invoice_id}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  getTotalAmount(){
    return this.dataSource.filteredData.map(r => r.amount).reduce((acc, value) => +acc + +value, 0);
  }

  savePDF() {
    document.body.classList.add('print_mode');
    this.exportAsService.save(this.exportAsConfig, 'invoices').subscribe(() => {
      setTimeout(()=>{document.body.classList.remove('print_mode');},1000);
    });
  }

  printPage(){
    window.print();
  }

}
