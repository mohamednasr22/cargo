import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material/material.module';
import { AddressComponent } from '../../modules/address/address.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { AngularFileUploaderModule } from "angular-file-uploader";
import {DpDatePickerModule} from 'ng2-date-picker';
import { ShipperComponent } from '../../shared/component/shipper/shipper.component';
import { ReceiverComponent } from '../../shared/component/receiver/receiver.component';
import { ProfileComponent } from '../../modules/profile/profile.component';
import { AttachmentComponent } from '../../shared/component/attachment/attachment.component';
import { GalleryComponent } from '../../shared/component/gallery/gallery.component';
import { FilesComponent } from '../../shared/component/files/files.component';
import { CreatelocaltransportationsComponent } from '../../modules/createlocaltransportations/createlocaltransportations.component';
import { LocaltransportationsComponent } from '../../modules/localtransportations/localtransportations.component';
import { ContainerstatusesComponent } from '../../modules/setting/containerstatuses/containerstatuses.component';
import { DestinationsComponent } from '../../modules/setting/destinations/destinations.component';
import { ContainertypesComponent } from '../../modules/setting/containertypes/containertypes.component';
import { ShippertypesComponent } from '../../modules/setting/shippertypes/shippertypes.component';
import { InvoicetypesComponent } from '../../modules/setting/invoicetypes/invoicetypes.component';
import { InvoicestatusesComponent } from '../../modules/setting/invoicestatuses/invoicestatuses.component';
import { ImageComponent } from '../../shared/modal/image/image.component';
import { ConfirmComponent } from '../../shared/modal/confirm/confirm.component';
import { GeneralpopupComponent } from '../../modules/setting/generalpopup/generalpopup.component';
import { SkeletonLoaderModule } from '../../shared/utils/skeleton-loader/skeleton-loader.module';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';
import { SettingComponent } from '../../modules/setting/setting.component';
import { ShipmentModule } from '../../modules/shipment/shipment.module';
import { ShipmentstatusesComponent } from '../../modules/setting/shipmentstatuses/shipmentstatuses.component';
import { ContainerModule } from '../../modules/container/container.module';
import { UserModule } from '../../modules/user/user.module';
import { GroupModule } from '../../modules/group/group.module';
import { QuoteModule } from '../../modules/quote/quote.module';
import { AccountingModule } from '../../modules/accounting/accounting.module';
import { SignaturesComponent } from '../../modules/container/signatures/signatures.component';
import { SignatureComponent } from '../../shared/component/signature/signature.component';
import { SignatureFormComponent } from '../../shared/component/signature-form/signature-form.component';
import { SignatureContractComponent } from '../../shared/component/signature-contract/signature-contract.component';
import { ExportAsModule } from 'ngx-export-as';
import { CourierComponent } from '../../modules/setting/courier/courier.component';
import { WarehouseComponent } from '../../modules/setting/warehouse/warehouse.component';
import { CommonpipesModule } from '../../modules/commonpipes/commonpipes.module';
import { FilemanagerComponent } from '../../shared/modal/filemanager/filemanager.component';
import { ShipmentnotesComponent } from '../../shared/shipmentnotes/shipmentnotes.component';



@NgModule({
  declarations: [DefaultComponent , AddressComponent, ShipperComponent, ReceiverComponent, ProfileComponent, AttachmentComponent, GalleryComponent, FilesComponent, CreatelocaltransportationsComponent, LocaltransportationsComponent, ContainerstatusesComponent, DestinationsComponent, ContainertypesComponent, ShippertypesComponent, InvoicetypesComponent, InvoicestatusesComponent, ImageComponent, ConfirmComponent , GeneralpopupComponent , ShipmentstatusesComponent, SettingComponent, SignaturesComponent, SignatureComponent, SignatureFormComponent, SignatureContractComponent, CourierComponent, WarehouseComponent, FilemanagerComponent, ShipmentnotesComponent],
  imports: [
    ExportAsModule,
    NgxMaterialTimepickerModule,
    CommonModule,
    RouterModule,
    AngularFileUploaderModule,
    SharedModule,
    MaterialModule,
    ImageViewerModule,
    SkeletonLoaderModule,
    GalleryModule,
    LightboxModule,
    GallerizeModule,
    FormsModule,
    DpDatePickerModule,
    ReactiveFormsModule,
    CommonpipesModule
  ]
})
export class DefaultModule { }


