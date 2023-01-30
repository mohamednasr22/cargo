import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthenticationService } from '../../../services/authentication.service';
import { ManagerService } from '../../services/manager.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() opened:boolean = false;
  private _menusopen:boolean = true;
  showsearch:boolean = true;

  submitting = false;

  @Output() menuStatus = new EventEmitter<string>();

  pms:any = {};

  notifications = [];
  totalnotifications = 0;

  constructor(private router: Router , private authenticationService:AuthenticationService , private managerService:ManagerService) {

    if(authenticationService.currentUserValue.permission){
      this.pms = authenticationService.currentUserValue.permission;
    }

    this.checkShipRoute(router.url);
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.checkShipRoute(event.url);
    });

    this.managerService.getNotifications().subscribe(res => {
       this.notifications = res.data;
       this.totalnotifications = parseInt(res.total.total);
    });

  }

  seenNotifications(){
    if(this.totalnotifications == 0) return;
    this.totalnotifications = 0;
    this.managerService.seenNotifications().subscribe(res => {

   });
  }

  ngOnInit(): void {

  }

  checkShipRoute($url){
    if($url.indexOf('shipment') !== -1 || $url == '/admin'){
      this.showsearch = true;
    } else {
      this.showsearch = false;
    }
  }

  refreshSettings(){
    if(!this.submitting){
      this.submitting = true;
      this.authenticationService.refresh().subscribe(data => {
        this.submitting = false;
        location.reload();
      }, err => {
        this.submitting = false;
        location.reload();
      });
    }
  }

  toggleMenu(){
    //this._menusopen = !this._menusopen;
    //this.menuStatus.emit(this._menusopen ? 'yes' : 'no');
    this.menuStatus.emit('toggle');
  }


  loggout(){
      this.authenticationService.logout();
      this.router.navigate(['/']);
  }
}
