import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ManagerService } from '../../../shared/services/manager.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { ContainerService } from '../../../shared/services/container.service';
import { GeneralItem } from '../../../models/GeneralItem';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class SharedComponent implements OnInit {

  warehouseId:FormControl = new FormControl();
  destinationName:FormControl = new FormControl();


  searchTerms = {
    warehouse_id : '',
    destination_name : ''
  };

  pms:any = {};

  expandedElement: any | null;

  loaded:boolean = false;

  isLoadingResults = true;

  isRateLimitReached = false;

  dataSource:MatTableDataSource<any> = new MatTableDataSource<any>();

  warehouses_list:GeneralItem[] = [];


  displayedColumns: string[] = ['warehouse_name' , 'destination_name', 'total_shipments', 'view'];

  constructor(private containerService:ContainerService , private _manager:ManagerService , private auth:AuthenticationService) { }

  ngOnInit(): void {

    this.containerService.getSharedContainers().subscribe(data => {
      if(data){
        if(data.data){
          console.log(data.data);
          this.dataSource.data = data.data;
        }
      }

      this._manager.getWarehouses().subscribe(data => {
        if(data){
          this.warehouses_list = data.data;
        }
        this.loaded = true;
      });

    });

    this.destinationName.valueChanges.subscribe(data => {
      this.searchTerms.destination_name = data;
      this.applyFilter(data);
    });

    this.warehouseId.valueChanges.subscribe(data => {
      this.searchTerms.warehouse_id = data;
      this.applyFilter(data);
    });

    this.dataSource.filterPredicate = (data, filter):boolean => {
      return data.warehouse_id.toString().toLowerCase().indexOf(this.searchTerms.warehouse_id) !== -1
        && (data.destination_name && data.destination_name.toLowerCase().indexOf(this.searchTerms.destination_name) !== -1);
    };

  }

  resetFilter(){
    this.searchTerms = {
      warehouse_id : '',
      destination_name : ''
    };
    this.warehouseId.setValue('');
    this.destinationName.setValue('');
  }

  applyFilter(val) {
    let filterValue = val;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
