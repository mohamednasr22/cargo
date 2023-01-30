import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  getInvoices($params = {}){
    return this.http.get(`${environment.apiUrl}/invoice/list`, { params : $params})
    .pipe(map((data:any) => {
      return data;
    }));
  }

  saveInvoice(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/invoice/save`, formData, { observe: 'events',  reportProgress: true });
  }

  getInvoice(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/invoice/get`, formData);
  }

  deleteInvoice(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/invoice/delete`, formData);
  }
  getInvoiceHistory(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/invoice/history`, formData);
  }

  getInvoiceFiles(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/invoice/files`, formData);
  }

  saveInvoiceFiles(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/invoice/savefiles`, formData, { observe: 'events',  reportProgress: true });
  }

  deleteInvoiceFile(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/invoice/deletefile`, formData);
  }
}
