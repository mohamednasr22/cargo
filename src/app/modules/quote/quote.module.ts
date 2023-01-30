import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteRoutingModule } from './quote-routing.module';
import { QuoteComponent } from './quote.component';
import { CreatequoteComponent } from './createquote/createquote.component';
import { QuotesComponent } from './quotes/quotes.component';
import { MaterialModule } from '../../shared/material/material.module';
import { SkeletonLoaderModule } from '../../shared/utils/skeleton-loader/skeleton-loader.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { DpDatePickerModule } from 'ng2-date-picker';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [QuotesComponent,CreatequoteComponent,QuoteComponent,ListComponent],
  imports: [
    NgxMaterialTimepickerModule,
    CommonModule,
    QuoteRoutingModule,
    MaterialModule,
    SkeletonLoaderModule,
    DpDatePickerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class QuoteModule { }
