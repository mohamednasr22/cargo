import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupsComponent } from './groups/groups.component';
import { CreategroupComponent } from './creategroup/creategroup.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'list' , pathMatch: 'full'
  },
  {
    path : 'list',
    component:GroupsComponent,
  },
  {
    path : ':id',
    component:CreategroupComponent,
  },
  {
    path : 'add',
    component:CreategroupComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
