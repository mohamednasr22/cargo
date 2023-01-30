import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountingsComponent } from './accountings/accountings.component';
import { CreateaccountingComponent } from './createaccounting/createaccounting.component';
import { PermissionguardGuard } from '../../helpers/permissionguard.guard';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'list' , pathMatch: 'full'
  },
  {
    path : 'list',
    component:AccountingsComponent,
  },
  {
    path : ':id',
    component:CreateaccountingComponent,
  },
  {
    path : 'add',
    component:CreateaccountingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
