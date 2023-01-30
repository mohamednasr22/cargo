import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private _menusopen:boolean = true;
  showsearch:boolean = true;

  @Output() menuStatus = new EventEmitter<string>();



  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if(event.url.indexOf('shipment') !== -1){
        this.showsearch = true;
      } else {
        this.showsearch = false;
      }
    });
  }

  ngOnInit(): void {


  }

  toggleMenu(){
    this._menusopen = !this._menusopen;
    this.menuStatus.emit(this._menusopen ? 'yes' : 'no');
  }
}
