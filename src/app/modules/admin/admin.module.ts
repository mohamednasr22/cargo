import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared/material/material.module';
import { DefaultModule } from '../../layout/default/default.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    DefaultModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
