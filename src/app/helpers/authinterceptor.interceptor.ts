import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthinterceptorInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {}

  intercept(request:HttpRequest<any>, next: HttpHandler):Observable<any> {
    debugger;
    const currentUser = this.authenticationService.currentUser;
    if (currentUser) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${currentUser}`
            }
        });
    }
    return next.handle(request);
  }
}
