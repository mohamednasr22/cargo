import { Component } from '@angular/core';
import { User } from './models/user';
import { Router, Event, NavigationStart } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cargo-app';
  currentUser: User;
  constructor(
      private router:Router,
      private authenticationService: AuthenticationService,
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      this.router.events.subscribe((event: Event) => {
        //console.log(event);
        if (event instanceof NavigationStart) {

        }
      });
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/']);
  }
}
