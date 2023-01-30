import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShipmentService } from '../../services/shipment.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-filemanager',
  templateUrl: './filemanager.component.html',
  styleUrls: ['./filemanager.component.scss']
})
export class FilemanagerComponent implements OnInit {

  percentCompleted = 0;
  isUploaded = false;
  submitted = false;

  constructor(public dialogRef: MatDialogRef<FilemanagerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any , private _shipmentService:ShipmentService) { }

  ngOnInit(): void {
    console.log(this.data.item);
  }

  onFileChange(event,index,item)  {
    this.submitted = true;
    let formData:FormData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("history_id", this.data.item.history_id);
    formData.append("url", item);

    this._shipmentService.updateHistoryItem(formData).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.percentCompleted = Math.round(100 * event.loaded  / event.total);
      } else if (event instanceof HttpResponse) {
        this.isUploaded = true;
        this.submitted = false;
        if(event.body.history_item){
          this.data.item.file[index] = event.body.history_item;
        }
      }
    }, error => {
      this.submitted = false;
    });
  }


  deleteItem(item){

    let formData:FormData = new FormData();
    formData.append("history_id", this.data.item.history_id);
    formData.append("url", item);
    this._shipmentService.deleteHistoryItem(formData).subscribe(event => {
      this.data.item.file = this.data.item.file.filter(x => x !== item);
    }, error => {
      this.submitted = false;
    });

  }

}
