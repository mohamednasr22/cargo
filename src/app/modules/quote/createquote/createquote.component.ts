import { Component, OnInit } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { GeneralItem } from '../../../models/GeneralItem';
import { ManagerService } from '../../../shared/services/manager.service';
import { FormControl } from '@angular/forms';
import { QuoteService } from '../../../shared/services/quote.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { User } from '../../../models/user';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../../services/authentication.service';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-createquote',
  templateUrl: './createquote.component.html',
  styleUrls: ['./createquote.component.scss']
})
export class CreatequoteComponent implements OnInit {

  private sub:any;

  userNameCtrl:FormControl = new FormControl('');

  currentDate = moment().format('MMM, YYYY');
  destinations_list: GeneralItem[] = [];

  users_list: User[] = [];

  filterUsers: Observable<User[]>;

  percentCompleted:number = 0;
  isUploaded:boolean = false;

  destinationInput:FormControl = new FormControl('');
  dateInput:FormControl = new FormControl(this.currentDate);

  submitted = false;

  ldata = [];

  userParameter = false;

  userId:any;
  constructor(private _snackBar: MatSnackBar, private auth:AuthenticationService , private route: ActivatedRoute,private _manager:ManagerService,private router: Router,private quoteService:QuoteService) { }

  ngOnInit(): void {

    this._manager.getDestinations().subscribe(data => {
      if(data){
        this.destinations_list = data.data;
      }

      this.auth.getUsers().subscribe(data => {
        if(data){
          if(data){
            this.users_list = data.data;
            this.activeUsers();
          }
        }

        this.sub = this.route.params.subscribe(params => {
          this.userId = +params['id'];
          if(!isNaN(this.userId)){
            this.userParameter = true;
            this.getQuote(this.userId);
          } else {
            this.getDefault();
          }
        });

      });

    });


  }

  getDefault(){
    this.ldata.push({
      name : "New York / New Jersey",
      data : [
        {'h40' : '0' , 'h45' : '0'},
        {'h40' : '0' , 'h45' : '0'},
        {'h40' : '0' , 'h45' : '0'},
        {'h40' : '0' , 'h45' : '0'},
        {'h40' : '0' , 'h45' : '0'},
        {'h40' : '0' , 'h45' : '0'}
      ],
      h40 : '0',h45 : '0'
    });

    this.ldata.push({
      name : "Savannah GA",
      data : [
        {'h40' : '0' , 'h45' : '0'},
        {'h40' : '0' , 'h45' : '0'},
        {'h40' : '0' , 'h45' : '0'},
        {'h40' : '0' , 'h45' : '0'},
        {'h40' : '0' , 'h45' : '0'},
        {'h40' : '0' , 'h45' : '0'}
      ],
      h40 : '0',h45 : '0'
    });

    this.ldata.push({
      name : "Houston TX",
      data : [
        {'h40' : '0' , 'h45' : '0'},
        {'h40' : '0' , 'h45' : '0'},
        {'h40' : '0' , 'h45' : '0'},
        {'h40' : '0' , 'h45' : '0'},
        {'h40' : '0' , 'h45' : '0'},
        {'h40' : '0' , 'h45' : '0'}
      ],
      h40 : '0',h45 : '0'
    });

    this.ldata.push({
      name : "Los Angeles CA",
      data : [
        {'h40' : '0' , 'h45' : '0'},
        {'h40' : '0' , 'h45' : '0'},
        {'h40' : '0' , 'h45' : '0'},
        {'h40' : '0' , 'h45' : '0'},
        {'h40' : '0' , 'h45' : '0'},
        {'h40' : '0' , 'h45' : '0'}
      ],
      h40 : '0',h45 : '0'
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


  getQuote(user_id){
    let _formData = new FormData();
    _formData.append('user_id' , user_id);
    this.quoteService.getAvailableQuote(_formData).subscribe(data => {
      if(data){
        this.userNameCtrl.setValue({ user_id : data.data.user_id , firstname : data.data.firstname , lastname : data.data.lastname});
        this.destinationInput.setValue(data.data.destination_id);
        let _dt = data.data.data;
        _dt = _dt.replace(/&quot;/g, '"');
        this.ldata = JSON.parse(_dt);
      }
    });
  }

  closeDatePicker(elem: MatDatepicker<any>) {
    elem.close();
  }

  onFirstChange(i,j,key,event){
    this.ldata[i]['data'][j][key] = event.target.value;
  }

  onSecondChange(i,key,event){
    this.ldata[i][key] = event.target.value;
  }

  displayUsers(item: User): string {
    return item && item.firstname ? (item.firstname + ' ' + item.lastname) : '';
  }

  onUserSelectionChanged($event):any{
    const userData = $event.option.value;
    this.userNameCtrl.setValue(userData);
  }

  viewQuote(){
    if(!this.destinationInput.value) return;
    let fd:FormData = new FormData();
    fd.append('date',this.dateInput.value);
    fd.append('destination_id',this.destinationInput.value);

    if(!this.userNameCtrl.value){
      this.openSnackBar('Missing Assigned User!','');
      return;
    } else {
      this.userId = this.userNameCtrl.value.user_id;
    }

    if(this.userId){

      fd.append('user_id',this.userId);
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

  }

  saveQuote(){
    if(!this.destinationInput.value){
      this.openSnackBar('Missing Destination!','');
      return;
    }

    if(!this.userNameCtrl.value){
      this.openSnackBar('Missing Assigned User!','');
      return;
    } else {
      this.userId = this.userNameCtrl.value.user_id;
    }


    let fd:FormData = new FormData();
    fd.append('date',this.dateInput.value);
    fd.append('data',JSON.stringify(this.ldata));
    fd.append('destination_id',this.destinationInput.value);
    if(this.userId){
      fd.append('user_id',this.userId);
      this.quoteService.saveQuote(fd).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentCompleted = Math.round(100 * event.loaded  / event.total);
        } else if (event instanceof HttpResponse) {
          this.isUploaded = true;
          this.submitted = false;
          this.openSnackBar('Data submited successfully','');
          this.router.navigate(["/admin/quote/list"]);
          console.log("success");
        }
      }, error => {
        this.submitted = false;
        this.openSnackBar('Something wrong happen!','');
        console.log("error");
      });
    }

  }

  saveDuplicate(){
    let fd:FormData = new FormData();
    fd.append('date',this.dateInput.value);
    fd.append('to_date',this.currentDate);
    fd.append('data',JSON.stringify(this.ldata));
    fd.append('destination_id',this.destinationInput.value);

    if(!this.userNameCtrl.value){
      this.openSnackBar('Missing Assigned User!','');
      return;
    } else {
      this.userId = this.userNameCtrl.value.user_id;
    }

    if(this.userId){
      fd.append('user_id',this.userId);
      this.quoteService.saveQuote(fd).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentCompleted = Math.round(100 * event.loaded  / event.total);
        } else if (event instanceof HttpResponse) {
          this.isUploaded = true;
          this.submitted = false;
          this.openSnackBar('Data submited successfully','');
          this.router.navigate(["/admin/quote/list"]);
        }
      }, error => {
        this.submitted = false;
        this.openSnackBar('Something wrong happen!','');
        console.log("error");
      });
    }


  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
