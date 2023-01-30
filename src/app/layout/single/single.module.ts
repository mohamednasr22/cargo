import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleComponent } from './single.component';
import { LoginComponent } from '../../modules/auth/login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { ApproveComponent } from '../../modules/auth/approve/approve.component';
import { ResetpasswordComponent } from '../../modules/auth/resetpassword/resetpassword.component';
import { ForgetpasswordComponent } from '../../modules/auth/forgetpassword/forgetpassword.component';
import { SignatureComponent } from '../../modules/container/signature/signature.component';
import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';



@NgModule({
  declarations: [SingleComponent, LoginComponent, ApproveComponent, ResetpasswordComponent, ForgetpasswordComponent, SignatureComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    ImageViewerModule,
    GalleryModule,
    LightboxModule,
    GallerizeModule
  ],
  exports : [RouterModule]
})
export class SingleModule { }
