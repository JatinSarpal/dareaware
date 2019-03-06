import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MainService {

    constructor(private http: HttpClient) { }

    updateParams(hard_refresh: boolean = false, no_cahce: boolean = false, background_request: boolean = false) {
        let headers = new HttpHeaders();
        if (hard_refresh) {
            headers = headers.set("hard_refresh", "hard_refresh");
        }
        if (no_cahce) {
            headers = headers.set("no_cahce", "no_cahce");
        }
        if(background_request){
            headers = headers.set("background_request", "background_request");
        }
        return headers;
    }

    
    post<T>(url, body: any, background_request: boolean = false, allowObjects?:boolean) {
        let headers = this.updateParams(true, true, background_request);
        if(!allowObjects){
            this.cleanObjectChilds(body);
        }
        return this.http.post<T>(url, body, { headers: headers });
    }
    
    put(url, body: any, background_request: boolean = false,allowObjects?:boolean) {
        let headers = this.updateParams(true, true, background_request);
        if(!allowObjects){
            this.cleanObjectChilds(body);
        }
        return this.http.put(url, body, { headers: headers });
    }
    cleanObjectChilds(body:any){
        Object.keys(body).forEach(key=>{
            if(this.isObject(body[key])){
                console.log('Deleting Object Prop');
                console.log(body[key]);
                delete body[key];
            }
        });
    }
    isObject(val:any) {
        if (val === null) { return false;}
        return ( (typeof val === 'function') || (typeof val === 'object') );
    }
    get<T>(url, hard_refresh: boolean = false, no_cahce: boolean = false, background_request: boolean = false) {
        let headers = this.updateParams(hard_refresh, no_cahce, background_request);
        return this.http.get<T>(url, { headers: headers });
    }
    getObservable(url, hard_refresh: boolean = false, no_cahce: boolean = false, background_request: boolean = false):Observable<HttpResponse<any>>{
        let headers = this.updateParams(hard_refresh, no_cahce, background_request);
        return this.http.get(url, { headers: headers, observe:'response' });
    }
    getWithParams(url, params: HttpParams, hard_refresh: boolean = false, no_cahce: boolean = false, background_request: boolean = false) {
        let headers = this.updateParams(hard_refresh, no_cahce, background_request);
        return this.http.get(url, { headers: headers, params: params });
    }

    delete(url,background_request: boolean = false) {
        let headers = this.updateParams(true, true, background_request);
        return this.http.delete(url, { headers: headers });
      }

}
