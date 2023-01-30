import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UsersComponent } from './users/users.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { MaterialModule } from '../../shared/material/material.module';
import { SkeletonLoaderModule } from '../../shared/utils/skeleton-loader/skeleton-loader.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserComponent,UsersComponent,CreateuserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    SkeletonLoaderModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
