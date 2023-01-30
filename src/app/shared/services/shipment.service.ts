import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Response } from '../../models/response';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  constructor(private http: HttpClient) { }

  getBulk(){
    return this.http.get(`${environment.apiUrl}/shipment/bulk`, {})
    .pipe(map((data:any) => {
      return data;
    }));
  }

  getShipments($params = {}){
    return this.http.get(`${environment.apiUrl}/shipment/list`, { params : $params})
    .pipe(map((data:any) => {
      return data;
    }));
  }

  getShippers(){
    return this.http.get(`${environment.apiUrl}/shipper/list`, {})
    .pipe(map((data:any) => {
      return data;
    }));
  }

  getReceivers(){
    return this.http.get(`${environment.apiUrl}/receiver/list`, {})
    .pipe(map((data:any) => {
      return data;
    }));
  }

  updateHistoryItem(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/shipment/updatehistoryitem`, formData, { observe: 'events',  reportProgress: true });
  }

  downloadHistoryItem(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/shipment/downloadgallery`, formData);
  }

  deleteHistoryItem(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/shipment/deletehistoryitem`, formData);
  }

  saveShipment(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/shipment/save`, formData, { observe: 'events',  reportProgress: true });
  }

  saveShipmentNotes(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/shipment/savenote`, formData);
  }

  getShipment(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/shipment/get`, formData);
  }

  getShipmentHistory(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/shipment/history`, formData);
  }

  getShipmentFiles(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/shipment/files`, formData);
  }

  saveShipmentFiles(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/shipment/savefiles`, formData, { observe: 'events',  reportProgress: true });
  }

  deleteShipmentFile(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/shipment/deletefile`, formData);
  }

  deleteShipment(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/shipment/delete`, formData);
  }
}
