import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[HeaderComponent, FooterComponent, SidebarComponent]
})
export class SharedModule { }
