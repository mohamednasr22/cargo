import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ShipmentService } from '../services/shipment.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-shipmentnotes',
  templateUrl: './shipmentnotes.component.html',
  styleUrls: ['./shipmentnotes.component.scss']
})
export class ShipmentnotesComponent implements OnInit {

  noteControl:FormControl = new FormControl();

  submitted = false;

  constructor(public dialogRef: MatDialogRef<ShipmentnotesComponent>, @Inject(MAT_DIALOG_DATA) public data: any , private _snackBar: MatSnackBar , private shipmentService:ShipmentService) { }

  ngOnInit(): void {
    this.noteControl.setValue(this.data.item.note);
  }

  submitForm(){
    this.submitted = true;
    let formData:FormData = new FormData();
    formData.append('note' , this.noteControl.value);
    if(this.data.item.shipment_id){
      formData.append('shipment_id',this.data.item.shipment_id.toString());
      this.shipmentService.saveShipmentNotes(formData).subscribe(event => {
        this.data.item.note = this.noteControl.value;
        this.submitted = false;
        this.onNoClick();
        this.openSnackBar('Data submited successfully','');
      }, error => {
        this.submitted = false;
        this.onNoClick();
        this.openSnackBar('Something wrong happen!','');
      });

    } else {
      this.submitted = false;
      this.onNoClick();
    }


  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
