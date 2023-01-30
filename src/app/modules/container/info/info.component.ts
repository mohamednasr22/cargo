import { Component, OnInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ManagerService } from '../../../shared/services/manager.service';
import { ContainerService } from '../../../shared/services/container.service';
import { ShipmentService } from '../../../shared/services/shipment.service';
import * as moment from 'moment';

import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
import { AuthenticationService } from '../../../services/authentication.service';

import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @ViewChild('content', { read: ElementRef }) content:ElementRef;

  @ViewChild('itemTemplate') itemTemplate: TemplateRef<any>;

  gallery_items: GalleryItem[];

  lightboxRef = null;


  exportAsConfig:ExportAsConfig = {
    type: 'pdf',
    elementIdOrContent: 'content'
  };

  containerHistory = [];

  shipments_list = [];

  info:any = {};

  containerId: number;
  editMode:boolean = false;

  private sub: any;

  pms:any = {};

  shared_container_id:number;


  constructor(private exportAsService: ExportAsService,private _snackBar: MatSnackBar , private router: Router,public dialog: MatDialog , private route: ActivatedRoute ,private _manager:ManagerService , private containerService:ContainerService , private shipmentService:ShipmentService, private auth:AuthenticationService,public gallery: Gallery, public lightbox: Lightbox) {
    this.shared_container_id = +this.auth.currentUserValue.shared_container_id;
    if(auth.currentUserValue.permission){
      this.pms = auth.currentUserValue.permission.container;
    }
  }

  ngOnInit(): void {
    this.info = {
      container : {
        container_no : '',
        booking_no : '',
        port_of_loading : '',
        port_of_discharge : '',
        sailing_date : '',
        courier : '',
        courier_name : '',
        courier_url : '',
        eta : ''
      },
      history : [],
    };

    this.lightboxRef = this.gallery.ref('lightbox');

    this.lightboxRef.setConfig({
      imageSize: ImageSize.Contain,
      thumbPosition: ThumbnailsPosition.Top,
      itemTemplate: this.itemTemplate,
      gestures: false
    });


    this.sub = this.route.params.subscribe(params => {
      this.containerId = +params['id'];
      if(!isNaN(this.containerId)){
        this.editMode =true;
        this.getContainer(this.containerId);
      } else {
        this.editMode =false;
        this.containerHistory = null;
        this.containerId = null;
      }
    });

  }

  getContainer(id){
    const fdata:FormData = new FormData();
    fdata.append('container_id',id);
    this.containerService.getContainer(fdata).subscribe(data => {
      if(data){
        if(data.data){
          const containerData = data.data.data;
          const hisData = data.data.history;
          const shipData = data.data.shipments;

          this.info = {
            container : {
              container_no : containerData.container_no,
              booking_no : containerData.booking_no,
              port_of_loading : containerData.port_of_loading,
              port_of_discharge : containerData.port_of_discharge,
              sailing_date : moment(new Date(containerData.sailing_date)).format('MM/DD/YYYY'),
              courier : containerData.courier,
              courier_name : containerData.courier_name,
              courier_url : containerData.courier_url,
              eta : containerData.eta,
            },
            history : hisData,
          };
          for(let i = 0 ; i < shipData.length ; i++){
            let shipdata = shipData[i];
            let packages = [];
            for(let j = 0 ; j < shipdata.packages.length ; j++){

              let pacItem = JSON.parse(shipdata.packages[j].data);

              if(pacItem.type == '1'){
                packages.push({
                  type:parseInt(pacItem.type),
                  year : pacItem.year,
                  model : pacItem.model,
                  mark : pacItem.mark,
                  vin : pacItem.vin,
                  value : pacItem.value
                });
              } else if(pacItem.type == '2') {
                packages.push({
                  type:parseInt(pacItem.type),
                  description : pacItem.description,
                  value : pacItem.value
                });
              }

            }

            this.shipments_list.push({
              shipment_id : shipdata.shipment_id,
              shipment : shipdata.shipment[0],
              packages : packages
            });

          }
        }
      }

    });
  }

  savePDF() {
    document.body.classList.add('print_mode');
    this.exportAsService.save(this.exportAsConfig, 'container_' + this.containerId).subscribe(() => {
      setTimeout(()=>{document.body.classList.remove('print_mode');},1000);
    });
  }

  printPage(){
    window.print();
  }

  openGallery(_item){
    if(_item.file.length > 0){
      this.gallery_items = _item.file.map(item => new ImageItem({ src: item, thumb: item }));


      this.lightboxRef.load(this.gallery_items);
      //this.lightbox.open(0);
      this.lightbox.open(0, 'lightbox', {panelClass: 'fullscreen'});
    }


  }

}
