import { Component, OnInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ManagerService } from '../../../shared/services/manager.service';
import { ShipmentService } from '../../../shared/services/shipment.service';
import * as moment from 'moment';

import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
import { AuthenticationService } from '../../../services/authentication.service';

import { ImageComponent } from '../../../shared/modal/image/image.component';

import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import { FilemanagerComponent } from '../../../shared/modal/filemanager/filemanager.component';
import { MatDialog } from '@angular/material/dialog';


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

  shipmentHistory = [];
  editMode = false;
  submitted = false;
  shipmentId: number;
  info:any = {};
  shipperType = '';
  shipper_types = [];
  destinations_list = [];
  containerType : '';
  private sub: any;
  permission:any = {};

  constructor(private exportAsService: ExportAsService,private router: Router,public dialog: MatDialog,private route: ActivatedRoute , private _manager:ManagerService , private _shipmentService:ShipmentService, private auth:AuthenticationService,public gallery: Gallery, public lightbox: Lightbox) {
    if(auth.currentUserValue.permission){
      this.permission = auth.currentUserValue.permission.shipment;
    }
  }

  ngOnInit(): void {
    this.info = {
      shipper : {
        shipper_id : '',
        name : '',
        email : '',
        phone : '',
        address : '',
        ein : '',
        shipper_type_id : '',
      },
      receiver : {
        receiver_id : '',
        name : '',
        email : '',
        phone : '',
        address : ''
      },
      other : {
        date : '',
        container_type_id : '',
        title : '',
        akey : '',
        destination_name : '',
        destination_id : '',
        warehouse_name : ''
      },
      history : [],
      packages : []
    };

    this.lightboxRef = this.gallery.ref('lightbox');

    this.lightboxRef.setConfig({
      imageSize: ImageSize.Contain,
      thumbPosition: ThumbnailsPosition.Top,
      itemTemplate: this.itemTemplate,
      gestures: false
    });

    this.sub = this.route.params.subscribe(params => {
      this.shipmentId = +params['id'];
      if(!isNaN(this.shipmentId)){
        this.editMode =true;
        this.getShipment(this.shipmentId);
      } else {
        this.editMode =false;
        this.shipmentHistory = null;
        this.shipmentId = null;
      }
    });
  }

  getShipment(id){
    const fdata:FormData = new FormData();
    fdata.append('shipment_id',id);
    this._shipmentService.getShipment(fdata).subscribe(data => {
      if(data){
        if(data.data){
          const shipData = data.data.data;
          const sprData = data.data.shipper;
          const recData = data.data.receiver;
          const desData = data.data.destination;
          const hisData = data.data.history;
          const pacData = data.data.packages;
          this.info = {
            shipper : {
              shipper_id : sprData.shipper_id,
              name : sprData.name,
              email : sprData.email,
              phone : sprData.phone,
              address : sprData.address,
              ein : sprData.ein,
              shipper_type_id : sprData.shipper_type_id
            },
            receiver : {
              receiver_id : recData.receiver_id,
              name : recData.name,
              email : recData.email,
              phone : recData.phone,
              address : recData.address,
            },
            other : {
              date : moment(new Date(shipData.date)).format('DD/MM/YYYY'),
              container_type_id : shipData.container_type_id,
              title : parseInt(shipData.title),
              akey : parseInt(shipData.akey),
              destination_name : desData.name,
              destination_id : desData.id,
              warehouse_name : shipData.warehouse_name,
            },
            history : hisData,
            packages : []
          };

          for(let i = 0 ; i < pacData.length ; i++){
            let pacItem = JSON.parse(pacData[i].data);

            if(pacItem.type == '1'){
              this.info.packages.push({
                type:parseInt(pacItem.type),
                year : pacItem.year,
                model : pacItem.model,
                mark : pacItem.mark,
                vin : pacItem.vin,
                value : pacItem.value
              });
            } else if(pacItem.type == '2') {
              this.info.packages.push({
                type:parseInt(pacItem.type),
                description : pacItem.description,
                value : pacItem.value
              });
            }

          }

          this._manager.getShipperTypes().subscribe(data => {
            if(data){
              this.shipper_types = data.data;
              for(let i = 0 ; i < this.shipper_types.length ; i++){
                if(this.shipper_types[i].id == sprData.shipper_type_id){
                  console.log(sprData.name);
                  this.shipperType = this.shipper_types[i].name;
                }
              }
            }
          });

          this._manager.getContainerTypes().subscribe(data => {
            if(data){
              let ddt = data.data;
              for(let i = 0 ; i < ddt.length ; i++){
                if(ddt[i].id == shipData.container_type_id){
                  this.containerType = ddt[i].name;
                }
              }
            }
          });


          /*
          this.dataForm.patchValue({
            shipper : {
              shipper_id : sprData.shipper_id,
              name : sprData.name,
              email : sprData.email,
              phone : sprData.phone,
              address : sprData.address,
              ein : sprData.ein,
              shipper_type_id : sprData.shipper_type_id
            },
            receiver : {
              receiver_id : recData.receiver_id,
              name : recData.name,
              email : recData.email,
              phone : recData.phone,
              address : recData.address,
            },
            other : {
              date : moment(new Date(shipData.date)),
              container_type_id : shipData.container_type_id,
              title : parseInt(shipData.title),
              akey : parseInt(shipData.akey),
              destination_name : desData.name,
              destination_id : desData.id
            }
          });
          for(let i = 0 ; i < pacData.length ; i++){
            let pacItem = JSON.parse(pacData[i].data);

            if(pacItem.type == '1'){
              this.packageArray.push(this.fb.group({
                type:[parseInt(pacItem.type)],
                year : [pacItem.year,Validators.required],
                model : [pacItem.model,Validators.required],
                mark : [pacItem.mark,Validators.required],
                vin : [pacItem.vin,Validators.required],
                value : [pacItem.value],
                file : [''],
                input : [pacItem.input]
              }));
            } else if(pacItem.type == '2') {
              this.packageArray.push(this.fb.group({
                type:[parseInt(pacItem.type)],
                description : [pacItem.description,Validators.required],
                value : [pacItem.value,Validators.required],
                file : [''],
                input : [pacItem.input]
              }));
            }

          }
          */
        }
      }

    });
  }

  savePDF() {
    document.body.classList.add('print_mode');
    this.exportAsService.save(this.exportAsConfig, 'shipment_' + this.shipmentId).subscribe(() => {
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

  openEditFiles(item){
    const dialogRef = this.dialog.open(FilemanagerComponent, {
      data: {item: item , type : 'shipment'}
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  downloadGallery(item){
    let formData:FormData = new FormData();
    formData.append("history_id", item.history_id);

    this._shipmentService.downloadHistoryItem(formData).subscribe(event => {
      if(event.history_file){
        window.open(event.history_file, "_blank");
      }
    }, error => {
      this.submitted = false;
    });
  }

  downloadShipmentGallery(){
    let formData:FormData = new FormData();
    formData.append("shipment_id", this.shipmentId.toString());

    this._shipmentService.downloadHistoryItem(formData).subscribe(event => {
      if(event.history_file){
        window.open(event.history_file, "_blank");
      }
    }, error => {
      this.submitted = false;
    });
  }

}
