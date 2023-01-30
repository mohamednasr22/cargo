import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceiverService {

  constructor(private http: HttpClient) { }
  getReceivers($params = {}){
    return this.http.get(`${environment.apiUrl}/receiver/list`, { params : $params})
    .pipe(map((data:any) => {
      return data;
    }));
  }

  saveReceiver(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/receiver/save`, formData, { observe: 'events',  reportProgress: true });
  }

  getReceiver(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/receiver/get`, formData);
  }

  deleteReceiver(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/receiver/delete`, formData);
  }
}
