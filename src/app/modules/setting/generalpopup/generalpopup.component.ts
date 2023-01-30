import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ManagerService } from '../../../shared/services/manager.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-generalpopup',
  templateUrl: './generalpopup.component.html',
  styleUrls: ['./generalpopup.component.scss']
})
export class GeneralpopupComponent implements OnInit {

  submitted = false;
  dataForm:FormGroup;
  editMode:boolean = false;

  constructor(public dialogRef: MatDialogRef<GeneralpopupComponent> , @Inject(MAT_DIALOG_DATA) public data: any ,private fb:FormBuilder,private _manager:ManagerService) { }

  ngOnInit(): void {
    this.resetForm();
    if(this.data.data){
      if(this.data.data.id){
        this.editMode = true;
        this.dataForm.patchValue({
          id : this.data.data.id,
          name : this.data.data.name,
          status : parseInt(this.data.data.status),
          type : this.data.type,
          url : this.data.data.url ? this.data.data.url : '',
          sort_order : this.data.data.sort_order ? this.data.data.sort_order : '',
        });
      } else {

        this.dataForm.patchValue({
          type : this.data.type,
          status : 1,
          url : '',
          sort_order : '0',
        });
      }

    }
  }

  resetForm(){
    this.dataForm = this.fb.group({
      id : [''],
      name : ['',Validators.required],
      status : ['1',Validators.required],
      type : [''],
      url : [''],
      sort_order : ['']
    });

  }

  submitForm(){
    this.submitted = true;
    let formData:FormData = new FormData();
    let copyFormData = JSON.parse(JSON.stringify(this.dataForm.value));
    this.jsonToFormData(formData,copyFormData);
    this._manager.save(formData).subscribe(data => {
      this.submitted = false;
      this.dialogRef.close(2);
    }, error => {
      this.submitted = false;
      this.dialogRef.close(1);
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
