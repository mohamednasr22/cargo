import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  username:string = '';
  image:string = '';
  baseurl:string = environment.assetsPrefix;
  pms:any = {};
  signatures:boolean = false;
  constructor(private authServive:AuthenticationService) {
    if(authServive.currentUserValue.permission){
      this.pms = authServive.currentUserValue.permission;
    }
  }

  ngOnInit(): void {
    this.authServive.currentUser.subscribe(data => {
      if(data){
        this.username = `${data.firstname} ${data.lastname}`;
        this.image = data.image ? data.image : `${this.baseurl}assets/images/user.jpg`;
        this.signatures = +data.signature == 1;
      }
    })
  }

}
