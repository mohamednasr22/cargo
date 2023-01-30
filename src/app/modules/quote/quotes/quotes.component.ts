import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { QuoteService } from '../../../shared/services/quote.service';
import { FormControl } from '@angular/forms';
import { GeneralItem } from '../../../models/GeneralItem';
import * as moment from 'moment';
import { ManagerService } from '../../../shared/services/manager.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';

import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  @ViewChild('content', { read: ElementRef }) content:ElementRef;

  exportAsConfig:ExportAsConfig = {
    type: 'pdf',
    elementIdOrContent: 'content',
    options : {
      jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
    }
  };

  loaded = false;
  currentDate = moment().format('MMM, YYYY');
  destinations_list: GeneralItem[] = [];

  percentCompleted:number = 0;
  isUploaded:boolean = false;

  destinationInput:FormControl = new FormControl('');
  dateInput:FormControl = new FormControl(this.currentDate);

  submitted = false;

  ldata = [];

  pms:any = {};

  userId = null;


  constructor(private exportAsService: ExportAsService,private _snackBar: MatSnackBar,private _manager:ManagerService,private router: Router,private quoteService:QuoteService, private auth:AuthenticationService) {
    if(auth.currentUserValue.permission){
      this.pms = auth.currentUserValue.permission.quotes;
      this.userId = auth.currentUserValue.user_id;
    }
 }

  ngOnInit(): void {
    /*
    this.ldata.push({
      name : "New York / New Jersey",
      data : [
        {'h40' : '200' , 'h45' : '220'},
        {'h40' : '359' , 'h45' : '379'},
        {'h40' : '545' , 'h45' : '565'},
        {'h40' : '644' , 'h45' : '674'},
        {'h40' : '543' , 'h45' : '573'},
        {'h40' : '886' , 'h45' : '896'},
      ],
      h40 : '956',h45 : '1200'
    });

    this.ldata.push({
      name : "Savannah GA",
      data : [
        {'h40' : '260' , 'h45' : '270'},
        {'h40' : '380' , 'h45' : '390'},
        {'h40' : '466' , 'h45' : '476'},
        {'h40' : '670' , 'h45' : '690'},
        {'h40' : '730' , 'h45' : '750'},
        {'h40' : '850' , 'h45' : '870'},
      ],
      h40 : '1050',h45 : '1150'
    });

    this.ldata.push({
      name : "Houston TX",
      data : [
        {'h40' : '320' , 'h45' : '340'},
        {'h40' : '475' , 'h45' : '495'},
        {'h40' : '533' , 'h45' : '553'},
        {'h40' : '699' , 'h45' : '749'},
        {'h40' : '740' , 'h45' : '760'},
        {'h40' : '920' , 'h45' : '940'},
      ],
      h40 : '1120',h45 : '1340'
    });

    this.ldata.push({
      name : "Los Angeles CA",
      data : [
        {'h40' : '240' , 'h45' : '260'},
        {'h40' : '390' , 'h45' : '410'},
        {'h40' : '588' , 'h45' : '600'},
        {'h40' : '680' , 'h45' : '700'},
        {'h40' : '575' , 'h45' : '595'},
        {'h40' : '950' , 'h45' : '970'},
      ],
      h40 : '1020',h45 : '1180'
    });
    */
    if(this.userId){
      let _formData = new FormData();
      _formData.append('user_id',this.userId);
      this.quoteService.getAvailableQuote(_formData).subscribe(data => {
        if(data){
          this.destinationInput.setValue(data.data.destination_id);
          let _dt = data.data.data;
          _dt = _dt.replace(/&quot;/g, '"');
          this.ldata = JSON.parse(_dt);
        }
        this._manager.getDestinations().subscribe(data => {
          if(data){
            this.destinations_list = data.data;
          }
          this.loaded = true;
        });
      });
    }



  }

  viewQuote(){
    if(!this.destinationInput.value) return;
    let fd:FormData = new FormData();
    fd.append('date',this.dateInput.value);
    fd.append('destination_id',this.destinationInput.value);
    if(this.userId){
      fd.append('user_id',this.userId);
    }
    this.quoteService.getQuote(fd).subscribe(data => {
      if(data){
        if(data.data){
          let _dt = data.data.data;
          _dt = _dt.replace(/&quot;/g, '"');
          this.ldata = JSON.parse(_dt);
        } else {
          this.openSnackBar('No records found','');
        }

      }
    }, error => {
      this.submitted = false;
      console.log("error");
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  savePDF() {
    document.body.classList.add('print_mode');
    this.exportAsService.save(this.exportAsConfig, 'quotes').subscribe(() => {
      setTimeout(()=>{document.body.classList.remove('print_mode');},1000);
    });
  }

  printPage(){
    window.print();
  }

}
