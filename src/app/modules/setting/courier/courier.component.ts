import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Status } from '../../../models/status';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ManagerService } from '../../../shared/services/manager.service';
import { ConfirmComponent } from '../../../shared/modal/confirm/confirm.component';
import { GeneralpopupComponent } from '../generalpopup/generalpopup.component';

@Component({
  selector: 'app-courier',
  templateUrl: './courier.component.html',
  styleUrls: ['./courier.component.scss']
})
export class CourierComponent implements OnInit {

  loaded = false;
  modeltype:string = 'courier';
  datasupscriber:any;
  dataSource:MatTableDataSource<Status>;
  displayedColumns: string[] = ['name' , 'url','update','delete'];
  constructor(public dialog: MatDialog , private _snackBar: MatSnackBar , private _manager:ManagerService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    if(this.datasupscriber){
      this.datasupscriber.unsubscribe();
    }
    this.datasupscriber = this._manager.getCouriers().subscribe(data => {
      if(data.data){
        this.dataSource = new MatTableDataSource<Status>(data.data)
      }
      this.loaded = true;
    });
  }

  delete(id){
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: { title : 'Are you sure?' , id : id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        const fdata:FormData = new FormData();
        fdata.append('id',result);
        fdata.append('type',this.modeltype);
        this._manager.delete(fdata).subscribe(data => {
          this.loadData();
        });
      }
    });
  }


  open(_data?): void {
    const dialogRef = this.dialog.open(GeneralpopupComponent, {
      width: '450px',
      data : { type : this.modeltype , data : _data ? _data : {},url : true}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.loadData();
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
