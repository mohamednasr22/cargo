import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ManagerService } from '../../shared/services/manager.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { AuthenticationService } from '../../services/authentication.service';

import { ExportAsService, ExportAsConfig } from 'ngx-export-as';


@Component({
  selector: 'app-localtransportations',
  templateUrl: './localtransportations.component.html',
  styleUrls: ['./localtransportations.component.scss']
})
export class LocaltransportationsComponent implements OnInit {

  @ViewChild('content', { read: ElementRef }) content:ElementRef;

  exportAsConfig:ExportAsConfig = {
    type: 'pdf',
    elementIdOrContent: 'content'
  };

  loaded = false;
  submited:boolean = false;
  percentCompleted:number = 0;

  locationCtrl:FormControl = new FormControl('');

  locations$:any = [];
  columns$: string[] = ['location','houston', 'california', 'newyork', 'savannah'];


  displayedColumns: string[] = [];

  columnsToDisplay: string[] = this.displayedColumns.slice();

  searchTerms = {
    Location : ''
  };

  pms:any = {};


  constructor(private exportAsService: ExportAsService,private managerService:ManagerService, private auth:AuthenticationService) {
    if(auth.currentUserValue.permission){
      this.pms = auth.currentUserValue.permission.localtransportation;
    }

    this.managerService.getExcelLocations().subscribe(data => {
      if(data){
        if(data.data){
          const _data = data.data;
          for (const key in _data[0]) {
            let _key = key.trim().toLocaleLowerCase();
            this.displayedColumns.push(key);
            this.columnsToDisplay.push(key);
          }
          this.locations$ = new MatTableDataSource(_data);
          this.locations$.filterPredicate = (data:any, filter):boolean => {
            if(data.Location){
              return data.Location.toLowerCase().indexOf(this.searchTerms.Location.toLowerCase()) !== -1;
            } else if(data.LOCATION){
              return data.LOCATION.toLowerCase().indexOf(this.searchTerms.Location.toLowerCase()) !== -1;
            } else if(data.LOCATIONS){
              return data.LOCATIONS.toLowerCase().indexOf(this.searchTerms.Location.toLowerCase()) !== -1;
            }

          }
        }
      }

      this.loaded = true;
    });

    this.locationCtrl.valueChanges.subscribe(data => {
      this.searchTerms.Location = data;
      this.applyFilter(data);
    });
  }

  ngOnInit(): void {


  }

  onFileChange(event)  {
    this.submited = true;
    let formData:FormData = new FormData();
    formData.append('file',event.target.files[0]);
    let currentFile = event.target;
    this.managerService.updateExcelLocations(formData).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.percentCompleted = Math.round(100 * event.loaded  / event.total);
        console.log(this.percentCompleted);
      } else if (event instanceof HttpResponse) {
        currentFile.value = '';
        this.submited = false;
        if(event.body){
          if(event.body.data){
            this.locations$.data = event.body.data;
          }
        }
        location.reload();
      }
    } , err => {
      this.submited = false;
      currentFile.value = '';
    });
  }

  loadLocations(){
    this.managerService.getExcelLocations().subscribe(data => {
      if(data){
        if(data.data){
          this.locations$.data = data.data;
        }
      }
    });
  }

  download(){
    const a = document.createElement("a");
    a.href = `${environment.apiUrl}/manager/downloadexcel`;
    a.download = "locations.xlsx";
    document.body.appendChild(a);
    a.click();
  }

  applyFilter(val) {
    let filterValue = val;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.locations$.filter = filterValue;
  }

  resetFilter(){
    this.searchTerms = {
      Location : ''
    };

    this.locationCtrl.setValue('');
    this.locations$.filter = '';
  }

  savePDF() {
    document.body.classList.add('print_mode');
    this.exportAsService.save(this.exportAsConfig, 'local_transportations').subscribe(() => {
      setTimeout(()=>{document.body.classList.remove('print_mode');},1000);
    });
  }

  printPage(){
    window.print();
  }
}
