import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../../models/user';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../../../services/authentication.service';
import { ConfirmComponent } from '../../../shared/modal/confirm/confirm.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['name' ,'update','delete'];
  dataSource:MatTableDataSource<User> = new MatTableDataSource<User>();

  loaded = false;

  constructor(public dialog: MatDialog,private auths:AuthenticationService) {
    this.auths.getUsers().subscribe(data => {
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
        this.auths.deleteUser(fdata).subscribe(data => {
          this.dataSource.data = this.dataSource.data.filter(row => row.user_id != result);
        });
      }
    });
  }

}
