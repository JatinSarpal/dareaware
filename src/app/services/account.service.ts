import { Injectable, EventEmitter } from '@angular/core';
import { MainService } from './main.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl:string = `${environment.baseUrl}account`;

  constructor(private mainService: MainService) { 

  }

  login(username,password){
    return this.mainService
            .get(`${this.baseUrl}/login`, username, password)
            .toPromise()
            .then(data=>{
              return data;
            });
  }

}
