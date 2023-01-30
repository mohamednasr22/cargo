import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../../shared/material/material.module';
import { RouterModule } from '@angular/router';
import { SingleModule } from '../../layout/single/single.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SingleModule,
    AuthRoutingModule
  ],
  exports : []
})
export class AuthModule { }
