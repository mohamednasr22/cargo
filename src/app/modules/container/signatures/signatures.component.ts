import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContainerService } from '../../../shared/services/container.service';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { MatTableDataSource } from '@angular/material/table';
import { GeneralItem } from '../../../models/GeneralItem';
import { GalleryComponent } from '../../../shared/component/gallery/gallery.component';

import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import { SignatureComponent } from '../../../shared/component/signature/signature.component';
import { AuthenticationService } from '../../../services/authentication.service';
import { SignatureFormComponent } from '../../../shared/component/signature-form/signature-form.component';
import { environment } from '../../../../environments/environment';
import { SignatureContractComponent } from '../../../shared/component/signature-contract/signature-contract.component';



@Component({
  selector: 'app-signatures',
  templateUrl: './signatures.component.html',
  styleUrls: ['./signatures.component.scss']
})
export class SignaturesComponent implements OnInit {

  @ViewChild('itemTemplate') itemTemplate: TemplateRef<any>;

  gallery_items: GalleryItem[];

  lightboxRef = null;


  loaded = false;

  pms:any = {};

  container_statuses:GeneralItem[] = [];

  displayedColumns: string[] = ['booking_no','container_no' , 'shipment_no', 'shipper_name', 'image' ,'update'];
  dataSource:MatTableDataSource<Container> = new MatTableDataSource<Container>();



  constructor(public dialog: MatDialog , private containerService:ContainerService,public gallery: Gallery, public lightbox: Lightbox , private auth:AuthenticationService) {
    if(auth.currentUserValue.permission){
      this.pms = auth.currentUserValue.permission.general;
      let filteredPermission = ['booking_no','container_no' , 'shipment_no', 'shipper_name', 'image'];
      if(+auth.currentUserValue.signature){
        filteredPermission.push('update');
      }
      this.displayedColumns = filteredPermission;
    }
  }


  ngOnInit(): void {

    this.lightboxRef = this.gallery.ref('lightbox');

    this.lightboxRef.setConfig({
      imageSize: ImageSize.Contain,
      thumbPosition: ThumbnailsPosition.Top,
      itemTemplate: this.itemTemplate,
      gestures: false
    });


    this.loadData();
  }

  loadData(){
    this.containerService.getContainersSignatures().subscribe(data => {
      if(data){
        if(data.data){
          this.dataSource.data = data.data;

        }
      }
      this.loaded = true;
    });
  }

  downloadContract(_code){
    const fdata:FormData = new FormData();
    fdata.append('code',_code);
    this.containerService.downloadContract(fdata).subscribe(data => {
      if(data.data){

      }
    });
  }

  openPhoto(_img):void{
    this.gallery_items = [_img + '?d=' + new Date().getTime()].map(item => new ImageItem({ src: item, thumb: item }));
    this.lightboxRef.load(this.gallery_items);
    this.lightbox.open(0, 'lightbox', {panelClass: 'fullscreen'});

  }

  signContract(_container){
    const dialogRef = this.dialog.open(SignatureComponent, {
      data: {container : _container}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadData();
    });
  }

  viewContract(_contract){
    const dialogRef = this.dialog.open(SignatureContractComponent, {
      data : _contract
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.loadData();
      }
    });
  }

}
