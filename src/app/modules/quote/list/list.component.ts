import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../../../services/authentication.service';
import { ConfirmComponent } from '../../../shared/modal/confirm/confirm.component';
import { QuoteService } from '../../../shared/services/quote.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  loaded = false;

  displayedColumns: string[] = ['name' , 'email' ,'update','delete'];
  dataSource:MatTableDataSource<any> = new MatTableDataSource<any>();


  constructor(public dialog: MatDialog,private auths:AuthenticationService,private quoteService:QuoteService) {
    this.quoteService.getList().subscribe(data => {
      if(data){
        if(data.data){
          this.dataSource.data = data.data;
        }
      }
      this.loaded = true;
    } , err => {
      this.loaded = true;
    });
  }

  ngOnInit(): void {

  }

  delete(id){
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: { title : 'Are you sure?' , id : id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        const fdata:FormData = new FormData();
        fdata.append('user_id',result);
        this.quoteService.deleteQuote(fdata).subscribe(data => {
          this.dataSource.data = this.dataSource.data.filter(row => row.user_id != result);
        });

      }
    });
  }

}
