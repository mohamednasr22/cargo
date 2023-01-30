import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Subject } from 'rxjs';
import { ContainerService } from '../../services/container.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

declare var SignaturePad:any;

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements OnInit {

  contract;
  baseurl:string = environment.assetsPrefix;
  private sub: any;
  private code:string;
  mode:number = 1;
  _subject = new Subject();
  @ViewChild('signPad', { static: false }) signPad:ElementRef<HTMLElement>;
  signaturePad;
  constructor(public dialogRef: MatDialogRef<SignatureComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private containerService:ContainerService) { }

  ngOnInit(): void {

    if(this.data.container){
      this.code = this.data.container.shipper_code;
      this.getSignature();
    } else {

    }
  }

  getSignature(){
    const fdata:FormData = new FormData();
    fdata.append('code',this.code);
    this.containerService.getManagerSignatureByCode(fdata).subscribe(data => {
      if(data.data){
        this.contract = data.contract;
        if(data.data.shipper_signed == "1"){
          this.mode = 2;
          this._subject.next(1);
        } else {
          this.mode = 4;
        }
      }
    });
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

  save(){
    this.mode = 1;
    var data = this.signaturePad.toDataURL('image/png');
    const fdata:FormData = new FormData();
    fdata.append('home',environment.home);
    fdata.append('code',this.code);
    fdata.append('image',data);
    this.containerService.saveManagerSignature(fdata).subscribe(data => {
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

}
