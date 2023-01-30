import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ManagerService } from '../../shared/services/manager.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  submitted = false;

  shipment_statuses = [];
  user_groups = [];
  container_types = [];
  dataForm:FormGroup;



  constructor(private _snackBar: MatSnackBar , private mng:ManagerService , public dialog: MatDialog , private fb:FormBuilder,private auths:AuthenticationService) { }

  ngOnInit(): void {
    this.resetForm();
    this.mng.getShipmentStatuses().subscribe(data => {
      if(data){
        this.shipment_statuses = data.data;
      }
      this.auths.getGroups().subscribe(data => {
        if(data){
          this.user_groups = data.data;
        }

        this.mng.getContainerTypes().subscribe(data => {
          if(data){
            this.container_types = data.data;
          }
        });
      });
    });

    this.getSettings();

  }
  getSettings(){
    this.mng.getSettings().subscribe(data => {
      if(data){
        if(data.data){
          const _data = data.data;
          this.dataForm.patchValue({
            owner_name : _data.owner_name,
            owner_email : _data.owner_email,
            shipment_pending : _data.shipment_pending,
            default_user_group : _data.default_user_group,
            shared_container_id : _data.shared_container_id,
            eta_reminder : _data.eta_reminder
          });
        }
      }
    });
  }
  resetForm(){
    this.dataForm = this.fb.group({
      owner_name : ['',Validators.required],
      owner_email : ['',[Validators.required , Validators.email]],
      shipment_pending : ['',Validators.required],
      default_user_group : ['',Validators.required],
      shared_container_id : ['',Validators.required],
      eta_reminder : ['',Validators.required]
    });
  }

  submitForm(){
    this.submitted = true;
    let formData:FormData = new FormData();
    let copyFormData = JSON.parse(JSON.stringify(this.dataForm.value));
    this.jsonToFormData(formData,copyFormData);


    this.mng.saveSettings(formData).subscribe(data => {
      this.submitted = false;
        this.openSnackBar('Data submited successfully','');
    }, error => {
      this.submitted = false;
      this.openSnackBar('Something wrong happen!','');
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
}
