import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ShipmentService } from '../../services/shipment.service';
import { ContainerService } from '../../services/container.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  fimage:string;
  images:any[];
  constructor(public dialogRef: MatDialogRef<GalleryComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private shipmentService:ShipmentService , private containerService:ContainerService) {
    this.images = [];
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.viewGallery();
    },1000);

  }

  viewGallery(){
    if(this.data.shipment_id){

      let formData:FormData = new FormData();
      formData.append('shipment_id',this.data.shipment_id);
      this.shipmentService.getShipmentHistory(formData).subscribe(data => {
        if(data){
          for(let i = 0 ; i < data.data.length; i++){
            this.images.push({path : data.data[i].file});
          }
        }
      });
    } else if(this.data.container_id){
      let formData:FormData = new FormData();
      formData.append('container_id',this.data.container_id);
      this.containerService.getContainerHistory(formData).subscribe(data => {
        if(data){
          for(let i = 0 ; i < data.data.length; i++){
            this.images.push({path : data.data[i].file});
          }
        }
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
