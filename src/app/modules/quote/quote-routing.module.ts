import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';
import { CreatequoteComponent } from './createquote/createquote.component';
import { ListComponent } from './list/list.component';
const routes: Routes = [
  {
    path : '',
    redirectTo : 'list' , pathMatch: 'full'
  },
  {
    path : 'list',
    component:ListComponent,
  },
  {
    path : 'view',
    component:QuotesComponent,
  },
  {
    path : 'add',
    component:CreatequoteComponent,
  },
  {
    path : ':id',
    component:CreatequoteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteRoutingModule { }
