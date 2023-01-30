import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { CreategroupComponent } from './creategroup/creategroup.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupComponent } from './group.component';
import { MaterialModule } from '../../shared/material/material.module';
import { SkeletonLoaderModule } from '../../shared/utils/skeleton-loader/skeleton-loader.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreategroupComponent,GroupsComponent,GroupComponent],
  imports: [
    CommonModule,
    GroupRoutingModule,
    MaterialModule,
    SkeletonLoaderModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GroupModule { }
