import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipperService {

  constructor(private http: HttpClient) { }
  getShippers($params = {}){
    return this.http.get(`${environment.apiUrl}/shipper/list`, { params : $params})
    .pipe(map((data:any) => {
      return data;
    }));
  }

  saveShipper(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/shipper/save`, formData, { observe: 'events',  reportProgress: true });
  }

  getShipper(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/shipper/get`, formData);
  }

  deleteShipper(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/shipper/delete`, formData);
  }
}
