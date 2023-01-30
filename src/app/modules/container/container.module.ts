import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent as ContainerInfoComponent } from '../../modules/container/info/info.component';


import { ContainerRoutingModule } from './container-routing.module';
import { ContainersComponent } from './containers/containers.component';
import { CreatecontainerComponent } from './createcontainer/createcontainer.component';
import { ContainerComponent } from './container.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { CommonpipesModule } from '../commonpipes/commonpipes.module';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material/material.module';
import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';
import { SkeletonLoaderModule } from '../../shared/utils/skeleton-loader/skeleton-loader.module';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DpDatePickerModule } from 'ng2-date-picker';
import { SharedComponent } from './shared/shared.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [ContainersComponent,CreatecontainerComponent,ContainerComponent,ContainerInfoComponent, SharedComponent],
  imports: [
    NgxMaterialTimepickerModule,
    CommonModule,
    ContainerRoutingModule,
    CommonpipesModule,
    AngularFileUploaderModule,
    SharedModule,
    MaterialModule,
    ImageViewerModule,
    SkeletonLoaderModule,
    GalleryModule,
    LightboxModule,
    GallerizeModule,
    FormsModule,
    CommonpipesModule,
    DpDatePickerModule,
    ReactiveFormsModule

  ]
})
export class ContainerModule { }
