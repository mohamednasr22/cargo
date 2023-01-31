import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) 
  {

  
      return this.http.post(`${environment.apiUrl}/auth/login`, { email, password })
      
        .pipe(map((_user: any) => {
           if (_user) {

            /* if (_user) {
              alert('_user ppp')

              let _dt = _user.permission;
              _dt = _dt.replace(/&quot;/g, '"');
              _user.permission = JSON.parse(_dt);
            } */
            localStorage.setItem('currentUser', JSON.stringify(_user.access_token));
            this.currentUser = _user.access_token;
            this.currentUserSubject.next(_user);
          } 
          return _user;
        }));
    
  }

  refresh() {
    return this.http.post(`${environment.apiUrl}/user/refresh`, {})
      .pipe(map((_user: any) => {
        console.log(_user);
        if (_user.email) {
          if (_user.permission) {
            let _dt = _user.permission;
            _dt = _dt.replace(/&quot;/g, '"');
            _user.permission = JSON.parse(_dt);
          }
          localStorage.setItem('currentUser', JSON.stringify(_user));
          this.currentUserSubject.next(_user);
        }
        return _user;
      }));
  }

  register(firstname: string, lastname: string, phone: string, email: string, password: string, redirect: string) {
    return this.http.post(`${environment.apiUrl}/auth/register`, { firstname, lastname, phone, email, password, redirect })
      .pipe(map((data: any) => {
        return data;
      }));
  }


  approveUser(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user/approve`, formData)
      .pipe(map((data: any) => {
        return data;
      }));
  }

  resetUser(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user/resetpassword`, formData)
      .pipe(map((data: any) => {
        return data;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  getUsers() {
    return this.http.get(`${environment.apiUrl}/user/list`, {})
      .pipe(map((data: any) => {
        return data;
      }));
  }

  updateUserProfile(_img) {
    let _user = this.currentUserValue;
    _user.image = _img;
    localStorage.setItem('currentUser', JSON.stringify(_user));
    this.currentUserSubject.next(_user);

  }

  saveUser(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user/save`, formData, { observe: 'events', reportProgress: true });
  }

  addUserFile(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user/savefiles`, formData, { observe: 'events', reportProgress: true });
  }

  deleteUserFile(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user/deletefile`, formData);
  }





  getUser(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user/get`, formData);
  }

  deleteUser(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user/delete`, formData);
  }

  getGroups() {
    return this.http.get(`${environment.apiUrl}/group/list`, {})
      .pipe(map((data: any) => {
        return data;
      }));
  }

  saveGroup(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/group/save`, formData);
  }

  getGroup(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/group/get`, formData);
  }

  deleteGroup(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/group/delete`, formData);
  }


}
