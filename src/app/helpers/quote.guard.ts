import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class QuoteGuard implements CanActivate {
  constructor(private router: Router,private authenticationService: AuthenticationService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const currentUser = this.authenticationService.currentUserValue;

      if (currentUser) {
        let pms = currentUser.permission;
        console.log(pms);
        if(pms.quotes.view && !pms.quotes.update){
          console.log('eee');
          this.router.navigate(['/admin/quote/view']);
          return false;
        }

        return true;
      }
      return true;
  }

}
