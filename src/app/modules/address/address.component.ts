import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ShipperComponent } from '../../shared/component/shipper/shipper.component';
import { ReceiverComponent } from '../../shared/component/receiver/receiver.component';
import { Receiver } from '../../models/receiver';
import { Shipper } from '../../models/shipper';
import { GeneralItem } from '../../models/GeneralItem';
import { FormControl } from '@angular/forms';
import { ShipperService } from '../../shared/services/shipper.service';
import { ReceiverService } from '../../shared/services/receiver.service';
import { ManagerService } from '../../shared/services/manager.service';
import { ConfirmComponent } from '../../shared/modal/confirm/confirm.component';
import { AuthenticationService } from '../../services/authentication.service';

import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
import { Subject, merge , of as observableOf } from 'rxjs';
import { tap, debounceTime, startWith, switchMap, map, catchError } from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';




@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit , AfterViewInit {
  @ViewChild('receiverSort',{read : MatSort}) sortR: MatSort;
  @ViewChild('shipperSort',{read : MatSort}) sortS: MatSort;
  @ViewChild('receiverPaginator' , {read : MatPaginator}) paginatorR: MatPaginator;
  @ViewChild('shipperPaginator' , {read : MatPaginator}) paginatorS: MatPaginator;

  @ViewChild('content', { read: ElementRef }) content:ElementRef;

  exportAsConfig:ExportAsConfig = {
    type: 'pdf',
    elementIdOrContent: 'content'
  };


  shipper_statuses:GeneralItem[] = [];

  shipperStatusId:FormControl = new FormControl('');

  shipperName:FormControl = new FormControl();
  receiverName:FormControl = new FormControl();


  shipperPhone:FormControl = new FormControl();
  receiverPhone:FormControl = new FormControl();

  shipperEmail:FormControl = new FormControl();
  receiverEmail:FormControl = new FormControl();

  shipper_searchTerms = {
    name : '',
    phone : '',
    email : ''
  };

  receiver_searchTerms = {
    name : '',
    phone : '',
    email : ''
  };

  callSSubject:Subject<void>;
  callRSubject:Subject<void>;

  loaded = false;
  loadedR = false;

  isRLoadingResults = true;
  isSLoadingResults = true;
  isRRateLimitReached = false;
  isSRateLimitReached = false;
  resultsSLength = 0;
  resultsRLength = 0;
  pageRSize = 20;
  pageSSize = 20;

  searchSTerms = {
    name : ''
  };

  searchRTerms = {
    name : ''
  };


  isAmin = true;

  displayedColumnsReceiver: string[] = ['name', 'phone', 'address', 'email' , 'status','update','delete'];
  receiver_dataSource = new MatTableDataSource<Receiver>();

  displayedColumnsShipper: string[] = ['name', 'phone', 'address', 'email' , 'status','update','delete'];
  shipper_dataSource = new MatTableDataSource<Shipper>();

  constructor(private exportAsService: ExportAsService,public dialog: MatDialog , private _manager:ManagerService , private shipperService:ShipperService , private receiverService:ReceiverService , private authServive:AuthenticationService) {
    if(this.authServive.currentUserValue.user_group_id != 1){
      this.isAmin = false;
      this.displayedColumnsReceiver = ['name', 'phone', 'address', 'email' , 'status','update'];
      this.displayedColumnsShipper = ['name', 'phone', 'address', 'email' , 'status','update'];
    }
    /*
    this.shipperService.getShippers().subscribe(data => {
      if(data){
        if(data.data){
          this.shipper_dataSource.data = data.data;
        }
      }
      this.receiverService.getReceivers().subscribe(data => {
        if(data){
          if(data.data){
            this.receiver_dataSource.data = data.data;
          }
        }
        this.loaded = true;
      });

    });
    */






    this.shipperName.valueChanges.subscribe(data => {
      this.shipper_searchTerms.name = data;
      this.applyShipperFilter(data);
    });

    this.receiverName.valueChanges.subscribe(data => {
      this.receiver_searchTerms.name = data;
      this.applyReceiverFilter(data);
    });


    this.shipperPhone.valueChanges.subscribe(data => {
      this.shipper_searchTerms.phone = data;
      this.applyShipperFilter(data);
    });

    this.receiverPhone.valueChanges.subscribe(data => {
      this.receiver_searchTerms.phone = data;
      this.applyReceiverFilter(data);
    });

    this.shipperEmail.valueChanges.subscribe(data => {
      this.shipper_searchTerms.email = data;
      this.applyShipperFilter(data);
    });

    this.receiverEmail.valueChanges.subscribe(data => {
      this.receiver_searchTerms.email = data;
      this.applyReceiverFilter(data);
    });
  }

  getShippers(){
    this.shipperService.getShippers().subscribe(data => {
      if(data){
        if(data.data){
          this.shipper_dataSource.data = data.data;
        }
      }
    });
  }

  getReceivers(){
    this.receiverService.getReceivers().subscribe(data => {
      if(data){
        if(data.data){
          this.receiver_dataSource.data = data.data;
        }
      }
    });
  }
  ngOnInit(): void {

    // For Shippers
    this.callSSubject = new Subject();
    this.callSSubject.pipe(
      tap(() => {
        this.isSLoadingResults = true;
      }),
      debounceTime(500)
    ).subscribe(() => {
      this.activeSNavigation();
    });

    // For Receivers
    this.callRSubject = new Subject();
    this.callRSubject.pipe(
      tap(() => {
        this.isRLoadingResults = true;
      }),
      debounceTime(500)
    ).subscribe(() => {
      this.activeRNavigation();
    });


    this.shipper_dataSource.filterPredicate = (data, filter):boolean => {
      return data.name.toLowerCase().indexOf(this.shipper_searchTerms.name) !== -1
        && data.phone.toString().toLowerCase().indexOf(this.shipper_searchTerms.phone) !== -1
        && data.email.toString().toLowerCase().indexOf(this.shipper_searchTerms.email) !== -1;
    }


    this.receiver_dataSource.filterPredicate = (data, filter):boolean => {
      return data.name.toLowerCase().indexOf(this.receiver_searchTerms.name) !== -1
        && data.phone.toString().toLowerCase().indexOf(this.receiver_searchTerms.phone) !== -1
        && data.email.toString().toLowerCase().indexOf(this.receiver_searchTerms.email) !== -1;
    }

  }

  ngAfterViewInit(){
    this.activeSNavigation();
    this.activeRNavigation();
  }

  activeSNavigation(){
    merge(this.sortS.sortChange, this.paginatorS.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isSLoadingResults = true;
          return this.shipperService!.getShippers({sort : this.sortS.active, order : this.sortS.direction , pagesize : this.paginatorS.pageSize, page : this.paginatorS.pageIndex + 1 , filter : Object.keys(this.searchSTerms).map(key => key + '___' + this.searchSTerms[key]).join('|')});
        }),
        map(data => {
          this.isSLoadingResults = false;
          this.isSRateLimitReached = false;
          this.resultsSLength = data.total;
          return data.items;

        }),
        catchError(() => {
          this.isSLoadingResults = false;
          this.isSRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => {
        this.shipper_dataSource.data = data;
        if(!this.loaded){
          this._manager.getShipperTypes().subscribe(data => {
            if(data){
              this.shipper_statuses = data.data;
            }

            this.loaded = true;
            setTimeout(() => {
              this.sortS.sortChange.subscribe(() => this.paginatorS.pageIndex = 0);
            }, 0);

          });
        }
      });
  }

  activeRNavigation(){
    merge(this.sortR.sortChange, this.paginatorR.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isRLoadingResults = true;
          return this.receiverService!.getReceivers({sort : this.sortR.active, order : this.sortR.direction , pagesize : this.paginatorR.pageSize, page : this.paginatorR.pageIndex + 1 , filter : Object.keys(this.searchRTerms).map(key => key + '___' + this.searchRTerms[key]).join('|')});
        }),
        map(data => {
          this.isRLoadingResults = false;
          this.isRRateLimitReached = false;
          this.resultsRLength = data.total;
          return data.items;

        }),
        catchError(() => {
          this.isRLoadingResults = false;
          this.isRRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => {
        this.receiver_dataSource.data = data;
        if(!this.loadedR){
          this.loadedR = true;
          setTimeout(() => {
            this.sortR.sortChange.subscribe(() => this.paginatorR.pageIndex = 0);
          }, 0);
        }
      });
  }


  applyShipperFilter(val) {
    /*
    let filterValue = val;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.shipper_dataSource.filter = filterValue;
    */
    let filterValue = val.toString();
    this.paginatorS.pageIndex = 0;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.callSSubject.next();
  }

  applyReceiverFilter(val) {
    /*
    let filterValue = val;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.receiver_dataSource.filter = filterValue;
    */
    let filterValue = val.toString();
    this.paginatorR.pageIndex = 0;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.callRSubject.next();
  }

  resetShipperFilter(){
    this.shipper_searchTerms = {
      name : '',
      phone : '',
      email : ''
    };

    this.shipperName.setValue('');
    this.shipperPhone.setValue('');
    this.shipperEmail.setValue('');
    //this.shipper_dataSource.filter = '';
    this.paginatorS.pageIndex = 0;
    this.callSSubject.next();
  }

  resetReceiverFilter(){
    this.receiver_searchTerms = {
      name : '',
      phone : '',
      email : ''
    };

    this.receiverName.setValue('');
    this.receiverPhone.setValue('');
    this.receiverEmail.setValue('');
    //this.receiver_dataSource.filter = '';
    this.paginatorR.pageIndex = 0;
    this.callRSubject.next();
  }

  deleteShipper(id){
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: { title : 'Are you sure?' , id : id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        const fdata:FormData = new FormData();
        fdata.append('shipper_id',result);
        this.shipperService.deleteShipper(fdata).subscribe(data => {
          this.paginatorS.pageIndex = 0;
          this.callSSubject.next();
          //this.getShippers();
        });
      }
    });
  }

  deleteReceiver(id){
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: { title : 'Are you sure?' , id : id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        const fdata:FormData = new FormData();
        fdata.append('receiver_id',result);
        this.receiverService.deleteReceiver(fdata).subscribe(data => {
          this.paginatorR.pageIndex = 0;
          this.callRSubject.next();
          //this.getReceivers();
        });
      }
    });
  }


  openShipperDialog(_data?): void {
    const dialogRef = this.dialog.open(ShipperComponent, {
      width: '450px',
      data : _data ? _data : {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.paginatorS.pageIndex = 0;
        this.callSSubject.next();
        //this.getShippers();
      }
    });
  }

  openReceiverDialog(_data?): void {
    const dialogRef2 = this.dialog.open(ReceiverComponent, {
      width: '450px',
      data : _data ? _data : {}
    });

    dialogRef2.afterClosed().subscribe(result => {
      if(result){
        this.paginatorR.pageIndex = 0;
        this.callRSubject.next();
        //this.getReceivers();
      }

    });
  }

  refresh(){
    // this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
    //   this.router.navigate(['Your actualComponent']);
    // });
  }

  savePDF() {
    document.body.classList.add('print_mode');
    this.exportAsService.save(this.exportAsConfig, 'address_book').subscribe(() => {
      setTimeout(()=>{document.body.classList.remove('print_mode');},1000);
    });
  }

  printPage(){
    window.print();
  }


}
