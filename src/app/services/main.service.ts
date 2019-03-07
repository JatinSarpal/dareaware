import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MainService {

    constructor(private http: HttpClient) { }

   
    post(url, body: any) {
       
        return this.http.post(url,body);
    }
    
    // put(url, body: any) {
    //     return this.http.put(url, body, { headers: headers });
    // }

    // get<T>(url) {
    //     return this.http.get<T>(url, { headers: headers });
    // }
    // getObservable(url):Observable<HttpResponse<any>>{
    //     return this.http.get(url, { headers: headers, observe:'response' });
    // }
    // getWithParams(url, params: HttpParams) {
    //     return this.http.get(url, { headers: headers, params: params });
    // }

    // delete(url) {
    //     let headers = this.updateParams();
    //     return this.http.delete(url, { headers: headers });
    //   }

}
