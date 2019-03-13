import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MainService {

    constructor(private http: HttpClient) { }
   
    post(url, body: any) {
        let header = new HttpHeaders();
        header.set("Access-Control-Allow-Origin","true");
        header.set("Allow", "GET,POST, HEAD");
        //header.set('Content-Type', 'application/json');
        return this.http.post(url, body, { headers: header });
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
