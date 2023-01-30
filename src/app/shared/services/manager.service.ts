import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  shipperList = [];
  shipperTypesList = [];
  destinationList = [];
  receiverList = [];

  constructor(private http: HttpClient) { }

  getExcelLocations(){
    return this.http.get(`${environment.apiUrl}/manager/excel`, {})
    .pipe(map((data:any) => {
      return data;
    }));
  }

  downloadExcelLocations(){
    return this.http.get(`${environment.apiUrl}/manager/downloadexcel`, {})
    .pipe(map((data:any) => {
      return data;
    }));
  }

  updateExcelLocations(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/manager/updateexcel`, formData, { observe: 'events',  reportProgress: true });
  }

  //Shipment Statuses
  getShipmentStatuses(){
    return this.http.get(`${environment.apiUrl}/manager/getshipmentstatuses`, {})
    .pipe(map((data:any) => {
      return data;
    }));
  }


  //Container Statuses
  getContainerStatuses(){
    return this.http.get(`${environment.apiUrl}/manager/getcontainerstatuses`, {})
    .pipe(map((data:any) => {
      return data;
    }));
  }



  //Destinations

  getDestinations(){
    return this.http.get(`${environment.apiUrl}/manager/getdestinations`, {})
    .pipe(map((data:any) => {
      return data;
    }));
  }


  // Container Types

  getContainerTypes(){
    return this.http.get(`${environment.apiUrl}/manager/getcontainertypes`, {})
    .pipe(map((data:any) => {
      return data;
    }));
  }

  // Warehouse
  getWarehouses(){
    return this.http.get(`${environment.apiUrl}/manager/getwarehouses`, {})
    .pipe(map((data:any) => {
      return data;
    }));
  }

  // Courier
  getCouriers(){
    return this.http.get(`${environment.apiUrl}/manager/getcouriers`, {})
    .pipe(map((data:any) => {
      return data;
    }));
  }


  // Shipper Types

  getShipperTypes(){
    return this.http.get(`${environment.apiUrl}/manager/getshippertypes`, {})
    .pipe(map((data:any) => {
      return data;
    }));
  }


  // Invoice Types

  getInvoiceTypes(){
    return this.http.get(`${environment.apiUrl}/manager/getinvoicetypes`, {})
    .pipe(map((data:any) => {
      return data;
    }));
  }


  // Invoice Status

  getInvoiceStatuses(){
    return this.http.get(`${environment.apiUrl}/manager/getinvoicestatuses`, {})
    .pipe(map((data:any) => {
      return data;
    }));
  }


  // General Update
  save(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/manager/save`, formData)
    .pipe(map((data:any) => {
      return data;
    }));
  }

  delete(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/manager/delete`, formData)
    .pipe(map((data:any) => {
      return data;
    }));
  }

  // Settings

  saveSettings(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/manager/savesettings`, formData)
    .pipe(map((data:any) => {
      return data;
    }));
  }


  getSettings(){
    return this.http.get(`${environment.apiUrl}/manager/getsettings`, {})
    .pipe(map((data:any) => {
      return data;
    }));
  }

  getNotifications(){
    return this.http.get(`${environment.apiUrl}/manager/getnotifications`, {})
    .pipe(map((data:any) => {
      return data;
    }));
  }

  seenNotifications(){
    return this.http.get(`${environment.apiUrl}/manager/seennotifications`, {})
    .pipe(map((data:any) => {
      return data;
    }));
  }
}
