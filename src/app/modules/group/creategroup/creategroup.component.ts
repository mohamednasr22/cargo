import { Component, OnInit } from '@angular/core';
import { Group } from '../../../models/group';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../../../services/authentication.service';
import { HttpEventType, HttpResponse, HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { ManagerService } from '../../../shared/services/manager.service';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.component.html',
  styleUrls: ['./creategroup.component.scss']
})
export class CreategroupComponent implements OnInit {

  submitted = false;

  shipment_statuses = [];
  container_statuses = [];

  dataForm:FormGroup;

  formData:FormData;

  groupId: number;

  editMode:boolean = false;

  private sub: any;

  constructor(private http:HttpClient ,private _snackBar: MatSnackBar , private mng:ManagerService , private router: Router,public dialog: MatDialog , private route: ActivatedRoute , private fb:FormBuilder,private auths:AuthenticationService) { }

  ngOnInit(): void {
    this.resetForm();

    this.sub = this.route.params.subscribe(params => {
      this.groupId = +params['id'];
      if(!isNaN(this.groupId)){
        this.editMode =true;
        this.getGroup(this.groupId);
      } else {
        this.editMode =false;
        this.groupId = null;
        this.resetForm();
      }
    });

    forkJoin([
      this.mng.getShipmentStatuses().pipe(tap(data => {
        if(data.data){
          this.shipment_statuses = data.data;
        }
      })),
          this.mng.getContainerStatuses().pipe(tap(data => {
            if(data.data){
              this.container_statuses = data.data;
            }
          }))
    ]).subscribe(() => console.log('ready'));
  }

  resetForm(){
    this.dataForm = this.fb.group({
      name : ['',Validators.required],
      permission : this.fb.group({
        shipment : this.fb.group({
          showall : [''],
          canassign : [''],
          view_shipper : [''],
          add : [''],
          view : [''],
          update : [''],
          delete : [''],
          control_history_gallery : [''],
          key : [''],
          title : [''],
          show_user_column : [''],
          disable_after_pending : [''],
          statuses : this.fb.control([])
        }),
        container : this.fb.group({
          showall : [''],
          add : [''],
          view : [''],
          update : [''],
          delete : [''],
          view_shared_container : [''],
          show_user_column : [''],
          statuses : this.fb.control([])
        }),
        accounting : this.fb.group({
          showall : [''],
          view : [''],
          add : [''],
          update : [''],
          delete : [''],
          show_user_column : ['']
        }),
        quotes : this.fb.group({
          view : [''],
          update : ['']
        }),
        localtransportation : this.fb.group({
          view : [''],
          update : ['']
        }),
        general : this.fb.group({
          showreceiver : [''],
          showshipper : [''],
          settings : [''],
          users : [''],
          signatures : ['']
        })
      })
    });
  }



  getGroup(id){
    const fdata:FormData = new FormData();
    fdata.append('user_group_id',id);

    this.auths.getGroup(fdata).subscribe(data => {
      if(data){
        if(data.data){
          const _data = data.data;
          let _dt = _data.permission;
          _dt = _dt.replace(/&quot;/g, '"');
          this.dataForm.patchValue({
            name : _data.name,
            permission : JSON.parse(_dt)
          });
        }
      }
    });

  }


  submitForm(){
    this.submitted = true;
    let formData:FormData = new FormData();
    let dataValues = this.dataForm.value;
    //let copyFormData = JSON.parse(JSON.stringify(this.dataForm.value));
    //this.jsonToFormData(formData,copyFormData);
    if(this.groupId){
      formData.append('user_group_id',this.groupId.toString());
    }

    formData.append('name',dataValues.name);
    formData.append('permission',JSON.stringify(dataValues.permission));

    this.auths.saveGroup(formData).subscribe(data => {
      this.submitted = false;
      this.openSnackBar('Data submited successfully','');
      this.router.navigate(["/admin/groups/list"]);

    }, error => {
      this.submitted = false;
      this.openSnackBar('Something wrong happen!','');
      this.router.navigate(["/admin/groups/list"]);
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

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
