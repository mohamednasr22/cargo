import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { first } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  baseurl:string = environment.assetsPrefix;
  active = false;
  loginForm: FormGroup;
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  regsubmitted = false;
  returnUrl: string;
  error = '';

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {
      if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/admin/shipments/list']);
      }
    }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });

    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required]
    },{validator: this.MustMatch('password', 'confirmpassword')});

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
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

  get f() { return this.loginForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.login(this.f.email.value, this.f.password.value);
  }

  login(u,p){
    
    this.authenticationService.login(u, p)
         .pipe(first())
        .subscribe( data => {
          if(data.access_token){
            console.log(this.returnUrl);
            this.router.navigate([this.returnUrl || "/admin/shipments/list"]);

          }
          if(data.error){
            alert(data.error);
          }
          this.submitted = false;
          this.loading = false;
        },
        error => {
            this.error = error;
            this.loading = false;
            this.submitted = false;
        }); 
  }

  get rf() { return this.registerForm.controls; }

  onRegisterSubmit() {
    this.regsubmitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;
    this.authenticationService.register(this.rf.firstname.value,this.rf.lastname.value,this.rf.phone.value,this.rf.email.value, this.rf.password.value , `${environment.home}approve`)
        .pipe(first())
        .subscribe( data => {
          this.resetRegForm();
          if(data.error){
            alert(data.error);
          } else {
            console.log(data.success);
            if(data){
              if(data.success){
                alert(data.success);
                //this.login(this.rf.email.value, this.rf.password.value);
              }
            }
          }
          this.loading = false;
          this.regsubmitted = false;
        },
        error => {
            this.error = error;
            this.loading = false;
            this.regsubmitted = false;
            this.resetRegForm();
        });
    }

  resetRegForm(){
    this.registerForm.patchValue({
      firstname : '',
      lastname : '',
      email : '',
      password : '',
      phone : '',
      confirmpassword : ''
    });
  }




  toggleActive($value){
    this.active = $value;
  }
}
