import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContainerService } from '../../../shared/services/container.service';
import { Subject } from 'rxjs';
import { environment } from '../../../../environments/environment';

import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';


declare var SignaturePad:any;

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements OnInit , AfterViewInit  {
  @ViewChild('itemTemplate') itemTemplate: TemplateRef<any>;
  gallery_items: GalleryItem[];

  exportAsConfig:ExportAsConfig = {
    type: 'pdf',
    elementIdOrContent: 'content'
  };

  lightboxRef = null;
  contract;
  baseurl:string = environment.assetsPrefix;
  viewSignBox = false;
  signimg = false;
  shippersignature = '';
  managersignature = '';
  private sub: any;
  private code:string;
  mode:number = 1;
  _subject = new Subject();
  @ViewChild('signPad', { static: false }) signPad:ElementRef<HTMLElement>;
  signaturePad;

  image:string = '';
  dataForm:FormGroup;

  constructor(private exportAsService: ExportAsService,private fb:FormBuilder , private route: ActivatedRoute , private containerService:ContainerService , public gallery: Gallery, public lightbox: Lightbox) { }

  ngOnInit(): void {
    console.log('welcome');
    this.dataForm = this.fb.group({
      page1 : this.fb.group({
        inpt1 : [''],
        inpt2 : [''],
        inpt3 : [''],
        inpt4 : [''],
        inpt5 : [''],
        inpt6 : [''],
        inpt7 : [''],
        inpt8 : [''],
        inpt9 : [''],
        inpt10 : [''],
        inpt11 : [''],
        inpt12 : [''],
        inpt13 : [''],
        inpt14 : [''],
        inpt15 : [''],
        inpt16 : [''],
        inpt17 : [''],
        inpt18 : [''],
        inpt19 : [''],
        inpt20 : [''],
        inpt21 : [''],
        inpt22 : [''],
        inpt23 : [''],
        inpt24 : [''],
        inpt25 : [''],
        inpt26 : [''],
        inpt27 : [''],
        inpt28 : [''],
        inpt29 : [''],
        inpt30 : [''],
        inpt31 : [''],
        inpt32 : [''],
        inpt33 : [''],
        inpt34 : [''],
        inpt35 : [''],
        inpt36 : [''],
        inpt37 : [''],
        inpt38 : [''],
        inpt39 : [''],
        inpt40 : [''],
        inpt41 : [''],
        inpt42 : [''],
        inpt43 : [''],
        inpt44 : [''],
        inpt45 : [''],
        inpt46 : [''],
        inpt47 : [''],
        inpt48 : [''],
        inpt49 : [''],
        inpt50 : [''],
        inpt51 : [''],
        inpt52 : [''],
        inpt53 : [''],
        inpt54 : ['']
      }),
      page2 : this.fb.group({
        inpt55 : [''],
        inpt56 : [''],
        inpt57 : [''],
        inpt58 : [''],
        inpt59 : [''],
        inpt60 : [''],
        inpt61 : [''],
        inpt62 : [''],
        inpt63 : [''],
        inpt64 : [''],
        inpt65 : [''],
        inpt66 : [''],
        inpt67 : [''],
        inpt68 : [''],
        inpt69 : ['']
      }),
      page3 : this.fb.group({
        inpt70 : [''],
        inpt71 : [''],
        inpt72 : [''],
        inpt73 : [''],
        inpt74 : [''],
        inpt75 : ['']
      }),
      page4 : this.fb.group({
        inpt76 : [''],
        inpt77 : [''],
        inpt78 : [''],
        inpt79 : [''],
        inpt80 : [''],
        inpt81 : [''],
        inpt82 : [''],
        inpt83 : ['']
      }),
      page5 : this.fb.group({
        inpt84 : [''],
        inpt85 : [''],
        inpt86 : [''],
        inpt87 : [''],
        inpt88 : [''],
        inpt89 : ['']
      }),
      page6 : this.fb.group({
        inpt90 : [''],
        inpt91 : ['']
      })
    });

    this.sub = this.route.params.subscribe(params => {
      let codeid = params['id'];
      if(codeid){
        this.code = codeid;
        this.getSignature();
      } else {

      }
    });

    this.lightboxRef = this.gallery.ref('lightbox');

    this.lightboxRef.setConfig({
      imageSize: ImageSize.Contain,
      thumbPosition: ThumbnailsPosition.Top,
      itemTemplate: this.itemTemplate,
      gestures: false
    });
  }

  getSignature(){
    const fdata:FormData = new FormData();
    fdata.append('code',this.code);
    this.containerService.getSignatureByCode(fdata).subscribe(data => {
      if(data.data){
        let _dt = data.data.contract_form;
        _dt = _dt.replace(/&quot;/g, '"');
        let _ddata = JSON.parse(_dt);

        this.contract = data.contract;

        this.dataForm.patchValue(_ddata);
        if(data.data.shipper_signed == "0"){
          this.mode = 2;
          this._subject.next(1);
        } else {
          if(data.data.user_signed == "0"){
            this.mode = 4;
          } else {
            this.shippersignature = data.data.shipper_signature;
            this.managersignature = data.data.manager_signature;
            this.mode = 6;
          }

        }
      }
    });
  }

  viewSignatureBox(){
    this.viewSignBox = true;
  }
  closeSignatureBox(){
    this.viewSignBox = false;
  }

  ngAfterViewInit():void{
    this._subject.subscribe(data => {
      if(data == 1){
        setTimeout(()=>{
          this.signaturePad = new SignaturePad(this.signPad.nativeElement, {
            backgroundColor: 'rgba(255, 255, 255, 0)',
            penColor: 'rgb(0, 0, 0)',
            velocityFilterWeight: .7,
            minWidth: 0.5,
            maxWidth: 2.5,
            throttle: 16,
            minPointDistance: 3,
          });
        },0);
      }
    });
  }

  openGallery(_image){
    this.gallery_items = [_image].map(item => new ImageItem({ src: item, thumb: item }));
    this.lightboxRef.load(this.gallery_items);
    this.lightbox.open(0, 'lightbox', {panelClass: 'fullscreen'});
  }

  save(){
    var data = this.signaturePad.toDataURL('image/png');
    this.signimg = data;
    this.viewSignBox = false;
  }

  submit(){
    this.mode = 1;
    var data = this.signaturePad.toDataURL('image/png');
    const fdata:FormData = new FormData();
    fdata.append('home',environment.home);
    fdata.append('code',this.code);
    fdata.append('image',data);
    this.containerService.saveSignature(fdata).subscribe(data => {

      if(data.success){
        this.mode = 3;
      } else {
        this.mode = 5;
      }
    });
  }

  clear(){
    this.signaturePad.clear();
  }

  reSign(){
    this.signimg = null;
    this.signaturePad.clear();
  }

  print(){
    window.print();
  }

  savePDF() {
    document.body.classList.add('print_mode');
    this.exportAsService.save(this.exportAsConfig, 'contract').subscribe(() => {
      setTimeout(()=>{document.body.classList.remove('print_mode');},1000);
    });
  }

}

