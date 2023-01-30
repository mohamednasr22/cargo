import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { environment } from '../../../../environments/environment';
import { Subject } from 'rxjs';
import { ContainerService } from '../../services/container.service';


import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

declare var SignaturePad:any;

@Component({
  selector: 'app-signature-contract',
  templateUrl: './signature-contract.component.html',
  styleUrls: ['./signature-contract.component.scss']
})
export class SignatureContractComponent implements OnInit {

  @ViewChild('content', { read: ElementRef }) content:ElementRef;

  exportAsConfig:ExportAsConfig = {
    type: 'pdf',
    elementIdOrContent: 'content',
    options: {
      html2canvas:  { scale: 2 },
      jsPDF:{ unit: 'in', format: 'letter', orientation: 'portrait' }
    }
  };

  viewSignBox = false;
  signimg = false;
  managersignimg = '';
  image:string = '';
  baseurl:string = environment.assetsPrefix;
  dataForm:FormGroup;
  _subject = new Subject();
  @ViewChild('signPad', { static: false }) signPad:ElementRef<HTMLElement>;
  signaturePad;

  constructor(private exportAsService: ExportAsService,public dialog: MatDialog , public containerService:ContainerService,private fb:FormBuilder,public dialogRef: MatDialogRef<SignatureContractComponent> , @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
    this.image = `${this.baseurl}assets/images/logo.jpeg`;
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
    if(this.data){
      let _dt = this.data.contract_form;
      _dt = _dt.replace(/&quot;/g, '"');
      let _ddata = JSON.parse(_dt);
      this.dataForm.patchValue(_ddata);
      this.signimg = this.data.shipper_signature;
      this.managersignimg = this.data.manager_signature;
    }

  }

  ngAfterViewInit():void{
    let _swt = this._subject.subscribe(data => {
      if(data == 1){
        _swt.unsubscribe();
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


  viewSignatureBox(){
    this.viewSignBox = true;
    this._subject.next(1);
  }

  closeSignatureBox(){
    this.viewSignBox = false;
  }

  save(){
    var data = this.signaturePad.toDataURL('image/png');
    this.managersignimg = data;
    this.viewSignBox = false;
  }

  clear(){
    this.signaturePad.clear();
  }

  reSign(){
    this.managersignimg = '';
    this.signaturePad.clear();
  }

  submit(){
    var data = this.signaturePad.toDataURL('image/png');
    const fdata:FormData = new FormData();
    fdata.append('home',environment.home);
    fdata.append('code',this.data.shipper_code);
    fdata.append('image',data);
    this.containerService.saveManagerSignature(fdata).subscribe(data => {
      if(data.success){
        this.dialogRef.close(true);
      } else {
        this.dialogRef.close(false);
      }
    });
  }

  savePDF() {
    document.body.classList.add('print_mode');
    this.exportAsService.save(this.exportAsConfig, 'contract').subscribe(() => {
      setTimeout(()=>{
        document.body.classList.remove('print_mode');
      },1000);
    });
  }

  printPage(){
    window.print();
  }

}
