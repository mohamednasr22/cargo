import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainersComponent } from './containers/containers.component';
import { CreatecontainerComponent } from './createcontainer/createcontainer.component';
import { InfoComponent as ContainerInfoComponent } from '../../modules/container/info/info.component';
import { SharedComponent } from './shared/shared.component';


const routes: Routes = [
  {
    path : '',
    redirectTo : 'list' , pathMatch: 'full'
  },
{
  path : 'list',
  component:ContainersComponent,
},
{
  path : 'shared',
  component:SharedComponent,
},
{
  path : 'add',
  component:CreatecontainerComponent,
},
{
  path : 'info/:id',
  component:ContainerInfoComponent,
},
{
  path : ':id',
  component:CreatecontainerComponent,
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
