import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  constructor(private http: HttpClient) { }

  getContainers($params = {}){
    return this.http.get(`${environment.apiUrl}/container/list`, { params : $params})
    .pipe(map((data:any) => {
      return data;
    }));
  }

  getSharedContainers(){
    return this.http.get(`${environment.apiUrl}/container/getsharedcontainers`, {})
    .pipe(map((data:any) => {
      return data;
    }));
  }

  requestSignature(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/container/requestSignature`, formData);
  }

  saveSignature(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/container/saveSignature`, formData);
  }

  saveManagerSignature(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/container/saveManagerSignature`, formData);
  }



  getSignatureByCode(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/container/getSignatureByCode`, formData);
  }

  getContainersSignatures(): Observable<any> {
    return this.http.post(`${environment.apiUrl}/container/getContainersSignatures`, {});
  }

  downloadContract(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/container/downloadContract`, formData);
  }



  getManagerSignatureByCode(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/container/getManagerSignatureByCode`, formData);
  }

  saveContainer(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/container/save`, formData, { observe: 'events',  reportProgress: true });
  }

  getContainer(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/container/get`, formData);
  }

  getContainerHistory(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/container/history`, formData);
  }

  getContainerShippers(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/container/shippers`, formData);
  }

  getContainerFiles(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/container/files`, formData);
  }

  saveContainerFiles(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/container/savefiles`, formData, { observe: 'events',  reportProgress: true });
  }

  deleteContainerFile(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/container/deletefile`, formData);
  }

  deleteContainer(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/container/delete`, formData);
  }

}
