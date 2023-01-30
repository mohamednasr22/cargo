import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShipmentService } from '../../services/shipment.service';
import { ContainerService } from '../../services/container.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  dataFiles:any = [];
  dataForm:FormGroup;

  submitted = false;
  percentCompleted:number = 0;
  isUploaded:boolean = false;

  filename:string = '';

  ready:boolean = false;

  loaded:boolean = false;

  constructor(public dialogRef: MatDialogRef<FilesComponent>, @Inject(MAT_DIALOG_DATA) public data: any , private _snackBar: MatSnackBar , private fb:FormBuilder , private shipmentService:ShipmentService , private containerService:ContainerService , private invoiceService:InvoiceService) {
    this.dataFiles = [];
    this.ready = false;
    this.dataForm = this.fb.group({
      files : this.fb.group({
        file : ['']
      })
    });

    if(this.data.shipment_id){
      this.loaded = false;
      let formData:FormData = new FormData();
      formData.append('shipment_id',this.data.shipment_id);
      this.shipmentService.getShipmentFiles(formData).subscribe(data => {
        if(data){
          for(let i = 0 ; i < data.data.length; i++){
            this.dataFiles.push(data.data[i]);
          }
        }
        this.loaded = true;
      },err => {
        this.loaded = true;
      });
    } else if(this.data.container_id){
      let formData:FormData = new FormData();
      formData.append('container_id',this.data.container_id);
      this.containerService.getContainerFiles(formData).subscribe(data => {
        if(data){
          for(let i = 0 ; i < data.data.length; i++){
            this.dataFiles.push(data.data[i]);
          }
        }
        this.loaded = true;
      },err => {
        this.loaded = true;
      });
    } else if(this.data.invoice_id){
      let formData:FormData = new FormData();
      formData.append('invoice_id',this.data.invoice_id);
      this.invoiceService.getInvoiceFiles(formData).subscribe(data => {
        if(data){
          for(let i = 0 ; i < data.data.length; i++){
            this.dataFiles.push(data.data[i]);
          }
        }
        this.loaded = true;
      },err => {
        this.loaded = true;
      });
    }
  }

  ngOnInit(): void {
  }

  onFileChange(event)  {
    this.ready = true;
    this.dataForm.get("files").get('file').setValue(event.target.files[0]);
    this.filename = this.dataForm.value.files.file.name;
  }

  submitForm(){
    this.submitted = true;
    let formData:FormData = new FormData();
    let copyFormData = JSON.parse(JSON.stringify(this.dataForm.value));
    copyFormData.files.file = this.dataForm.get("files").get("file").value;
    this.jsonToFormData(formData,copyFormData);
    if(this.data.shipment_id){
      formData.append('shipment_id',this.data.shipment_id.toString());
      this.shipmentService.saveShipmentFiles(formData).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentCompleted = Math.round(100 * event.loaded  / event.total);
        } else if (event instanceof HttpResponse) {
          this.isUploaded = true;
          this.submitted = false;
          this.onNoClick();
          this.openSnackBar('Data submited successfully','');
          console.log("success");
        }
      }, error => {
        this.submitted = false;
        this.onNoClick();
        this.openSnackBar('Something wrong happen!','');
        console.log("error");
      });

    } else if(this.data.container_id){
      formData.append('container_id',this.data.container_id.toString());
      this.containerService.saveContainerFiles(formData).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentCompleted = Math.round(100 * event.loaded  / event.total);
        } else if (event instanceof HttpResponse) {
          this.isUploaded = true;
          this.submitted = false;
          this.onNoClick();
          this.openSnackBar('Data submited successfully','');
          console.log("success");

        }
      }, error => {
        this.submitted = false;
        this.onNoClick();
        this.openSnackBar('Something wrong happen!','');

        console.log("error");
      });

    } else if(this.data.invoice_id){
      formData.append('invoice_id',this.data.invoice_id.toString());
      this.invoiceService.saveInvoiceFiles(formData).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentCompleted = Math.round(100 * event.loaded  / event.total);
        } else if (event instanceof HttpResponse) {
          this.isUploaded = true;
          this.submitted = false;
          this.onNoClick();
          this.openSnackBar('Data submited successfully','');
          console.log("success");

        }
      }, error => {
        this.submitted = false;
        this.onNoClick();
        this.openSnackBar('Something wrong happen!','');

        console.log("error");
      });

    }


  }

  deleteFile(file_id){
    console.log(file_id);
    this.submitted = true;
    let formData:FormData = new FormData();
    formData.append('file_id',file_id.toString());
    if(this.data.shipment_id){
      formData.append('shipment_id',this.data.shipment_id.toString());
      this.shipmentService.deleteShipmentFile(formData).subscribe(data => {
        if(data) {
          this.submitted = false;
          this.onNoClick();
          this.openSnackBar('File deleted successfully','');
        }
      }, error => {
        this.submitted = false;
        this.onNoClick();
        this.openSnackBar('Something wrong happen!','');
        console.log("error");
      });

    } else if(this.data.container_id){
      formData.append('container_id',this.data.container_id.toString());
      this.containerService.deleteContainerFile(formData).subscribe(data => {
        if(data) {
          this.submitted = false;
          this.onNoClick();
          this.openSnackBar('File deleted successfully','');
        }
      }, error => {
        this.submitted = false;
        this.onNoClick();
        this.openSnackBar('Something wrong happen!','');

        console.log("error");
      });
    } else if(this.data.invoice_id){
      formData.append('invoice_id',this.data.invoice_id.toString());
      this.invoiceService.deleteInvoiceFile(formData).subscribe(data => {
        if(data) {
          this.submitted = false;
          this.onNoClick();
          this.openSnackBar('File deleted successfully','');
        }
      }, error => {
        this.submitted = false;
        this.onNoClick();
        this.openSnackBar('Something wrong happen!','');

        console.log("error");
      });
    }
  }

  openSnackBar(message: string, action: string) {


    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  buildFormData(formData, data, parentKey) {
    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
      Object.keys(data).forEach(key => {
        this.buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
      });
    } else {
      const value = data == null ? '' : data;

      formData.append(parentKey, value);
    }
  }

  jsonToFormData(formData , data) {
    this.buildFormData(formData, data,'');
  }

  onNoClick(): void {
    this.ready = true;
    this.dataFiles = [];
    this.dialogRef.close();
  }

}
