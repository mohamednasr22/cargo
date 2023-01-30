import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentRoutingModule } from './shipment-routing.module';
import { CreateshipmentsComponent } from './createshipments/createshipments.component';
import { ShipmentComponent } from './shipment.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { InfoComponent as ShipmentInfoComponent } from './info/info.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
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
import { CommonpipesModule } from '../commonpipes/commonpipes.module';

@NgModule({
  declarations: [CreateshipmentsComponent , ShipmentComponent , ShipmentsComponent , ShipmentInfoComponent],
  imports: [
    NgxMaterialTimepickerModule,
    CommonModule,
    ShipmentRoutingModule,
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
export class ShipmentModule { }
