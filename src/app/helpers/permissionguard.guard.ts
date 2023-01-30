import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PermissionguardGuard implements CanActivate {
  pm:any = {};
  setting_routes = [
    'admin/shipmentstatuses',
    'admin/containerstatuses',
    'admin/containertypes',
    'admin/couriers',
    'admin/warehouses',
    'admin/destinations',
    'admin/shippertypes',
    'admin/invoicetypes',
    'admin/invoicestatuses',
    'admin/configurations'
  ];
  users_routes = [
    'admin/users',
    'admin/groups'
  ];
  constructor(private auth:AuthenticationService , private router: Router ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.auth.currentUserValue.permission){
        this.pm = this.auth.currentUserValue.permission;
        this.router.events.subscribe(event => {
              if(event instanceof NavigationEnd){
                this.checkShipments(event.url);
                this.checkContainers(event.url);
                this.checkQuote(event.url);
                this.checkLocalTransportations(event.url);
                this.checkSharedContainer(event.url);
                this.checkAccounting(event.url);
                this.checkSignature(event.url);
                this.checkSettings(event.url);
                this.checkUsers(event.url);
                return true
              }
          });
      }
    return true;
  }

  checkShipments(url){
    if(url.indexOf('shipments/add') !== -1 && this.pm.shipment.add == false){
      this.router.navigate(['/admin/error']);
      return false;
    } else if(url.indexOf('shipments/info') !== -1 && this.pm.shipment.view == false){
      this.router.navigate(['/admin/error']);
      return false;
    } else if(this.indexOfRegx(url ,/admin\/shipments\/\d+/) !== -1 && this.pm.shipment.update == false){
      this.router.navigate(['/admin/error']);
      return false;
    }
  }

  checkContainers(url){
    if(url.indexOf('containers/add') !== -1 && this.pm.container.add == false){
      this.router.navigate(['/admin/error']);
      return false;
    } else if(url.indexOf('containers/info') !== -1 && this.pm.container.view == false){
      this.router.navigate(['/admin/error']);
      return false;
    } else if(this.indexOfRegx(url ,/admin\/containers\/\d+/) !== -1 && this.pm.container.update == false){
      this.router.navigate(['/admin/error']);
      return false;
    }
  }

  checkQuote(url){
    if(url.indexOf('quote/list') !== -1 && this.pm.quotes.view == false){
      this.router.navigate(['/admin/error']);
      return false;
    } else if(url.indexOf('quote/add') !== -1 && this.pm.quotes.update == false){
      this.router.navigate(['/admin/error']);
      return false;
    }
  }

  checkLocalTransportations(url){
    if(url.indexOf('localtransportantions') !== -1 && this.pm.localtransportation.view == false){
      this.router.navigate(['/admin/error']);
      return false;
    }
  }

  checkSharedContainer(url){
    if(url.indexOf('containers/shared') !== -1 && this.pm.container.view_shared_container == false){
      this.router.navigate(['/admin/error']);
      return false;
    }
  }

  checkAccounting(url){
    if(url.indexOf('accountings') !== -1 && this.pm.accounting.view == false){
      this.router.navigate(['/admin/error']);
      return false;
    }
  }

  checkSignature(url){
    if(url.indexOf('admin/signature') !== -1 && this.pm.general.signatures == false){
      this.router.navigate(['/admin/error']);
      return false;
    }
  }

  checkSettings(url){
    let exist = false;
    for(let ui = 0 ; ui < this.setting_routes.length ; ui++){
      if(url.indexOf(this.setting_routes[ui]) !== -1 && this.pm.general.settings == false){
        exist = true;
        break;
      }
    }
    if(exist){
      this.router.navigate(['/admin/error']);
      return false;
    }
  }

  checkUsers(url){
    let exist = false;
    for(let ui = 0 ; ui < this.users_routes.length ; ui++){
      if(url.indexOf(this.users_routes[ui]) !== -1 && this.pm.general.users == false){
        exist = true;
        break;
      }
    }
    if(exist){
      this.router.navigate(['/admin/error']);
      return false;
    }
  }
  indexOfRegx(value , regex){
    var match = value.match(regex);
    return match ? value.indexOf(match[0]) : -1;
  }


}
