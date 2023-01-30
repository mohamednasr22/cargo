import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GeneralItem } from '../../../models/GeneralItem';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ManagerService } from '../../services/manager.service';
import { InvoiceService } from '../../services/invoice.service';
import { ShipperService } from '../../services/shipper.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-shipper',
  templateUrl: './shipper.component.html',
  styleUrls: ['./shipper.component.scss']
})
export class ShipperComponent implements OnInit {

  submitted = false;
  shipper_types:GeneralItem[] = [];
  dataForm:FormGroup;


  percentCompleted:number = 0;
  isUploaded:boolean = false;

  formData:FormData;


  shipperId: number;
  editMode:boolean = false;

  constructor(public dialogRef: MatDialogRef<ShipperComponent> , @Inject(MAT_DIALOG_DATA) public data: any ,private _snackBar: MatSnackBar,private fb:FormBuilder,private _manager:ManagerService , private shipperService:ShipperService) { }
  ngOnInit(): void {

    this.resetForm();

    this._manager.getShipperTypes().subscribe(data => {
      if(data){
        this.shipper_types = data.data;
      }
    });

    if(this.data.shipper_id){
      this.editMode = true;
      this.dataForm.patchValue({
        name : this.data.name,
        phone : this.data.phone,
        email : this.data.email,
        address : this.data.address,
        ein : this.data.ein,
        shipper_type_id : this.data.shipper_type_id,
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
      ein : ['',Validators.required],
      shipper_type_id : ['',Validators.required],
      status : [1,Validators.required]
    });

  }

  getShipper(id){
    const fdata:FormData = new FormData();
    fdata.append('shipper_id',id);
    this.shipperService.getShipper(fdata).subscribe(data => {
      if(data){
        if(data.data){
          const _data = data.data;
          this.dataForm.patchValue({
            name : _data.name,
            phone : _data.phone,
            email : _data.email,
            address : _data.address,
            ein : _data.ein,
            shipper_type_id : _data.shipper_type_id,
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
      if(this.data.shipper_id){
        formData.append('shipper_id',this.data.shipper_id);
      }
    }


    this.shipperService.saveShipper(formData).subscribe(event => {
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
