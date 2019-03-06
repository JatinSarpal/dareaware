import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MainService {

    constructor(private http: HttpClient) { }

    updateParams() {
        let headers = new HttpHeaders();
        headers = headers.set("Accept", "application/json");
        headers = headers.set("Access-Control-Allow-Origin", "*");
        headers = headers.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
        headers = headers.set("content-type", "application/json");
        return headers;
    }

    post<T>(url, body: any) {
        let headers = this.updateParams();
        return this.http.post<T>(url, body, { headers: headers });
    }
    
    put(url, body: any) {
        let headers = this.updateParams();
        return this.http.put(url, body, { headers: headers });
    }

    get<T>(url) {
        let headers = this.updateParams();
        return this.http.get<T>(url, { headers: headers });
    }
    getObservable(url):Observable<HttpResponse<any>>{
        let headers = this.updateParams();
        return this.http.get(url, { headers: headers, observe:'response' });
    }
    getWithParams(url, params: HttpParams) {
        let headers = this.updateParams();
        return this.http.get(url, { headers: headers, params: params });
    }

    delete(url) {
        let headers = this.updateParams();
        return this.http.delete(url, { headers: headers });
      }

}
