import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) { }

  saveQuote(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/quote/save`, formData, { observe: 'events',  reportProgress: true });
  }

  getList(): Observable<any> {
    return this.http.post(`${environment.apiUrl}/quote/list`, {});
  }

  getAvailableQuote(formData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/quote/available`, formData);
  }

  getQuote(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/quote/getquote`, formData);
  }

  deleteQuote(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/quote/delete`, formData);
  }
}
