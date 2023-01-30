import { Component, OnInit } from '@angular/core';
import { Group } from '../../../models/group';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../../../services/authentication.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { ConfirmComponent } from '../../../shared/modal/confirm/confirm.component';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss']
})
export class CreateuserComponent implements OnInit {

  submitted = false;

  files:any = [];

  groups:Group[] = [];

  dataForm:FormGroup;


  percentCompleted:number = 0;
  isUploaded:boolean = false;

  formData:FormData;


  userId: number;
  editMode:boolean = false;

  private sub: any;

  constructor(private _snackBar: MatSnackBar , private router: Router,public dialog: MatDialog , private route: ActivatedRoute , private fb:FormBuilder,private auths:AuthenticationService) { }

  ngOnInit(): void {
    this.resetForm();
    this.auths.getGroups().subscribe(data => {
      if(data){
        this.groups = data.data;
      }
    });


    this.sub = this.route.params.subscribe(params => {
      this.userId = +params['id'];
      if(!isNaN(this.userId)){
        this.editMode =true;
        this.getUser(this.userId);
      } else {
        this.editMode =false;
        this.userId = null;
        this.resetForm();
      }
    });
  }


  resetForm(){
    this.dataForm = this.fb.group({
      firstname : ['',Validators.required],
      lastname : ['',Validators.required],
      phone : ['',Validators.required],
      email : ['',[Validators.required , Validators.email]],
      user_group_id : ['',Validators.required],
      image : [''],
      approved : [''],
      signature : [''],
      file: [''],
      password: [''],
      confirmpassword: ['']
    },{validator: this.MustMatch('password', 'confirmpassword')});
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }

  onFileChange(event)  {
    if(this.userId){
      let filetarget = event.target;
      let file = filetarget.files[0];
      let formData:FormData = new FormData();
      formData.append('user_id',this.userId.toString());
      formData.append('file',file);
      this.auths.addUserFile(formData).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {

        } else if (event instanceof HttpResponse) {
          this.openSnackBar('File Uploaded successfully','');
          filetarget.value= '';
          if(event.body.data){
            this.files.push(event.body.data);
          }
        }

      }, error => {
        this.openSnackBar('Something wrong happen!','');
        filetarget.value= '';
      });
    }
  }

  download(file) {
    var link = document.createElement("a");
    link.download = file.name;
    link.href = file.file;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  getUser(id){
    const fdata:FormData = new FormData();
    fdata.append('user_id',id);
    this.auths.getUser(fdata).subscribe(data => {
      if(data){
        if(data.data){
          const _data = data.data;
          this.files = data.files;
          this.dataForm.patchValue({
            firstname : _data.firstname,
            lastname : _data.lastname,
            phone : _data.phone,
            email : _data.email,
            image : _data.image,
            approved : +_data.approved,
            signature : +_data.signature,
            user_group_id : _data.user_group_id
          });
        }
      }
    });
  }

  onImageChange(event)  {
    this.dataForm.get("file").setValue(event.target.files[0]);
  }

  submitForm(){
    this.submitted = true;
    let formData:FormData = new FormData();
    let copyFormData = JSON.parse(JSON.stringify(this.dataForm.value));
    copyFormData.file = this.dataForm.get("file").value;
    this.jsonToFormData(formData,copyFormData);
    if(this.userId){
      formData.append('user_id',this.userId.toString());
    }

    this.auths.saveUser(formData).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.percentCompleted = Math.round(100 * event.loaded  / event.total);
      } else if (event instanceof HttpResponse) {
        this.isUploaded = true;
        this.submitted = false;
        this.openSnackBar('Data submited successfully','');
        this.router.navigate(["/admin/users/list"]);
        console.log("success");
      }
    }, error => {
      this.submitted = false;
      this.openSnackBar('Something wrong happen!','');
      this.router.navigate(["/admin/users/list"]);
      console.log("error");
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

  delete(id){
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: { title : 'Are you sure?' , id : id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        const fdata:FormData = new FormData();
        fdata.append('file_id',result);
        fdata.append('user_id',this.userId.toString());
        this.auths.deleteUserFile(fdata).subscribe(data => {

          this.files = this.files.filter(row => row.file_id != result);
        });
      }
    });
  }

}
