import { Component, OnInit, Inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-signature-form',
  templateUrl: './signature-form.component.html',
  styleUrls: ['./signature-form.component.scss']
})
export class SignatureFormComponent implements OnInit {

  image:string = '';
  baseurl:string = environment.assetsPrefix;
  dataForm:FormGroup;

  constructor(private fb:FormBuilder,public dialogRef: MatDialogRef<SignatureFormComponent> , @Inject(MAT_DIALOG_DATA) public data: any) { }

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

      //this.contract = data.contract;
      this.dataForm.patchValue(_ddata);

    }
  }

  saveForm(){
    this.dialogRef.close(this.dataForm.value);
  }

}
