import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CreateuserComponent } from './createuser/createuser.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'list' , pathMatch: 'full'
  },
  {
    path : 'list',
    component:UsersComponent,
  },
  {
    path : ':id',
    component:CreateuserComponent,
  },
  {
    path : 'add',
    component:CreateuserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
