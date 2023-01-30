import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DefaultComponent } from '../../layout/default/default.component';
import { PermissionguardGuard } from '../../helpers/permissionguard.guard';
import { ProfileComponent } from '../profile/profile.component';
import { SettingComponent } from '../setting/setting.component';
import { AddressComponent } from '../address/address.component';
import { SignaturesComponent } from '../container/signatures/signatures.component';
import { LocaltransportationsComponent } from '../localtransportations/localtransportations.component';
import { CreatelocaltransportationsComponent } from '../createlocaltransportations/createlocaltransportations.component';
import { ContainerstatusesComponent } from '../setting/containerstatuses/containerstatuses.component';
import { DestinationsComponent } from '../setting/destinations/destinations.component';
import { ShipmentstatusesComponent } from '../setting/shipmentstatuses/shipmentstatuses.component';
import { ContainertypesComponent } from '../setting/containertypes/containertypes.component';
import { ShippertypesComponent } from '../setting/shippertypes/shippertypes.component';
import { InvoicetypesComponent } from '../setting/invoicetypes/invoicetypes.component';
import { InvoicestatusesComponent } from '../setting/invoicestatuses/invoicestatuses.component';
import { CourierComponent } from '../setting/courier/courier.component';
import { WarehouseComponent } from '../setting/warehouse/warehouse.component';
const routes: Routes = [
  {
    path : '',
    component:DefaultComponent,
    children : [
      {
        path : '',
        redirectTo : 'shipments' , pathMatch: 'full'
      },
      {
        path : 'users',
        canActivate:[PermissionguardGuard],
        loadChildren : () => import('../user/user.module').then(m => m.UserModule)
      },
      {
        path : 'groups',
        canActivate:[PermissionguardGuard],
        loadChildren : () => import('../group/group.module').then(m => m.GroupModule)
      },
      {
        path : 'shipments',
        canActivate:[PermissionguardGuard],
        loadChildren : () => import('../shipment/shipment.module').then(m => m.ShipmentModule)
      },
      {
        path : 'containers',
        canActivate:[PermissionguardGuard],
        loadChildren : () => import('../container/container.module').then(m => m.ContainerModule)
      },
      {
        path : 'accountings',
        canActivate:[PermissionguardGuard],
        loadChildren : () => import('../accounting/accounting.module').then(m => m.AccountingModule)
      },
      {
        path : 'quote',
        canActivate:[PermissionguardGuard],
        loadChildren : () => import('../quote/quote.module').then(m => m.QuoteModule)
      },
      {
        path : 'profile',
        component:ProfileComponent
      },
      {
        path : 'configurations',
        canActivate:[PermissionguardGuard],
        component:SettingComponent
      },
      {
        path:'address',
        component:AddressComponent
      },
      {
        path:'signature',
        canActivate:[PermissionguardGuard],
        component:SignaturesComponent
      },
      {
        path:'localtransportantions',
        canActivate:[PermissionguardGuard],
        component:LocaltransportationsComponent
      },
      {
        path:'createlocaltransportantions',
        component:CreatelocaltransportationsComponent
      },
      {
        path:'containerstatuses',
        canActivate:[PermissionguardGuard],
        component:ContainerstatusesComponent
      },
      {
        path:'destinations',
        canActivate:[PermissionguardGuard],
        component:DestinationsComponent
      },
      {
        path:'shipmentstatuses',
        canActivate:[PermissionguardGuard],
        component:ShipmentstatusesComponent
      },
      {
        path:'containertypes',
        canActivate:[PermissionguardGuard],
        component:ContainertypesComponent
      },
      {
        path:'shippertypes',
        canActivate:[PermissionguardGuard],
        component:ShippertypesComponent
      },
      {
        path:'invoicetypes',
        canActivate:[PermissionguardGuard],
        component:InvoicetypesComponent
      },
      {
        path:'invoicestatuses',
        canActivate:[PermissionguardGuard],
        component:InvoicestatusesComponent
      },
      {
        path:'couriers',
        canActivate:[PermissionguardGuard],
        component:CourierComponent
      },
      {
        path:'warehouses',
        canActivate:[PermissionguardGuard],
        component:WarehouseComponent
      },
      {
        path : 'error',
        redirectTo : 'shipments' , pathMatch: 'full'
      },
      {
        path : '**',
        redirectTo : 'shipments' , pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
