import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipmentsComponent } from './shipments/shipments.component';
import { CreateshipmentsComponent } from './createshipments/createshipments.component';
import { InfoComponent as ShipmentInfoComponent } from './info/info.component';



const routes: Routes = [
  {
    path : '',
    redirectTo : 'list' , pathMatch: 'full'
  },
{
  path : 'list',
  component:ShipmentsComponent,
},
{
  path : ':id',
  component:CreateshipmentsComponent,
},
{
  path : 'add',
  component:CreateshipmentsComponent,
},
{
  path : 'info/:id',
  component:ShipmentInfoComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipmentRoutingModule { }
