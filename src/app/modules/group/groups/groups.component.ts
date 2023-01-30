import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Group } from '../../../models/group';
import { AuthenticationService } from '../../../services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../../shared/modal/confirm/confirm.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  displayedColumns: string[] = ['name' ,'update','delete'];
  dataSource:MatTableDataSource<Group> = new MatTableDataSource<Group>();

  loaded = false;

  constructor(public dialog: MatDialog,private auths:AuthenticationService) {
    this.auths.getGroups().subscribe(data => {
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
        fdata.append('user_group_id',result);
        this.auths.deleteGroup(fdata).subscribe(data => {
          this.dataSource.data = this.dataSource.data.filter(row => row.user_group_id != result);
        });
      }
    });
  }



}
