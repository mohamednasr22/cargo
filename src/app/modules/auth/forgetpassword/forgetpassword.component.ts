import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {

  submitted = false;

  success = false;
  faild = false;

  dataForm:FormGroup;

  email:FormControl = new FormControl('');

  baseurl:string = environment.assetsPrefix;

  constructor(private fb:FormBuilder , private auth:AuthenticationService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(){
    this.dataForm = this.fb.group({
      email : ['',[Validators.required , Validators.email]]
    });
  }

  submit(){
    this.submitted = true;
    this.faild = false;
    this.success = false;
    let formData:FormData = new FormData();
    let copyFormData = JSON.parse(JSON.stringify(this.dataForm.value));
    this.jsonToFormData(formData,copyFormData);

    this.auth.resetUser(formData).subscribe(data => {
      if(data){
        if(data.error){
          this.faild = true;
        } else if(data.success){
          this.success = true;
        }
      }
      this.submitted = false;
    }, error => {
      this.submitted = false;
      this.faild = true;
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
