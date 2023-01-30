import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleComponent } from '../../layout/single/single.component';
import { LoginComponent } from './login/login.component';
import { ApproveComponent } from './approve/approve.component';
import { SignatureComponent } from '../container/signature/signature.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

const routes: Routes = [
  {
    path : '',
    component:LoginComponent
  },
  {
    path : 'approve',
    component:ApproveComponent
  },
  {
    path : 'approve/:id',
    component:ApproveComponent
  },
  {
    path : 'signature',
    component:SignatureComponent
  },
  {
    path : 'signature/:id',
    component:SignatureComponent
  },
  {
    path : 'forgetpassword',
    component:ForgetpasswordComponent
  },
  {
    path : 'resetpassword',
    component:ResetpasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
