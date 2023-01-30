import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingRoutingModule } from './accounting-routing.module';
import { AccountingComponent } from './accounting.component';
import { CreateaccountingComponent } from './createaccounting/createaccounting.component';
import { AccountingsComponent } from './accountings/accountings.component';
import { MaterialModule } from '../../shared/material/material.module';
import { SkeletonLoaderModule } from '../../shared/utils/skeleton-loader/skeleton-loader.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AccountingsComponent,CreateaccountingComponent,AccountingComponent],
  imports: [
    CommonModule,
    AccountingRoutingModule,
    MaterialModule,
    SkeletonLoaderModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountingModule { }
