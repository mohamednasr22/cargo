import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GeneralItem } from '../../../models/GeneralItem';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManagerService } from '../../services/manager.service';
import { ReceiverService } from '../../services/receiver.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnInit {

  submitted = false;
  dataForm:FormGroup;

  percentCompleted:number = 0;
  isUploaded:boolean = false;

  formData:FormData;


  receiverId: number;
  editMode:boolean = false;

  constructor(public dialogRef: MatDialogRef<ReceiverComponent> , @Inject(MAT_DIALOG_DATA) public data: any ,private _snackBar: MatSnackBar,private fb:FormBuilder,private _manager:ManagerService , private receiverService:ReceiverService) { }
  ngOnInit(): void {

    this.resetForm();

    if(this.data.receiver_id){
      this.editMode = true;
      this.dataForm.patchValue({
        name : this.data.name,
        phone : this.data.phone,
        email : this.data.email,
        address : this.data.address,
        status : +this.data.status
      });
    }


  }

  resetForm(){
    this.dataForm = this.fb.group({
      name : ['',Validators.required],
      email : ['',[Validators.required , Validators.email]],
      phone : ['',Validators.required],
      address : ['',Validators.required],
      status : [1,Validators.required]
    });

  }

  getShipper(id){
    const fdata:FormData = new FormData();
    fdata.append('shipper_id',id);
    this.receiverService.getReceiver(fdata).subscribe(data => {
      if(data){
        if(data.data){
          const _data = data.data;
          this.dataForm.patchValue({
            name : _data.name,
            phone : _data.phone,
            email : _data.email,
            address : _data.address,
            status : +_data.status
          });
        }
      }

    });
  }

  submitForm(){
    this.submitted = true;
    let formData:FormData = new FormData();
    let copyFormData = JSON.parse(JSON.stringify(this.dataForm.value));
    this.jsonToFormData(formData,copyFormData);
    if(this.data){
      if(this.data.receiver_id){
        formData.append('receiver_id',this.data.receiver_id);
      }
    }

    this.receiverService.saveReceiver(formData).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.percentCompleted = Math.round(100 * event.loaded  / event.total);
      } else if (event instanceof HttpResponse) {
        this.isUploaded = true;
        this.submitted = false;
        this.openSnackBar('Data submited successfully','');
        this.dialogRef.close(true);
      }
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
