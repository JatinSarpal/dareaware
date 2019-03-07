import { Injectable, EventEmitter } from '@angular/core';
import { MainService } from './main.service';
import { environment } from '../../environments/environment';
import { SignupModel } from '../models/signup-model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl: string = `${environment.baseUrl}`;

  constructor(private mainService: MainService) {
  }

  login(username, password) {
    // return this.mainService
    //   .get(`${this.baseUrl}login`)
    //   .toPromise()
    //   .then(data => {
    //     return data;
    //   });
  }

  signUp(signupModel: SignupModel) {
    this.mainService
      .post(`${this.baseUrl}register?username=`+signupModel.userName + '&email_number='+signupModel.email+ '&password='+signupModel.password,null).toPromise()
      .then(data =>{
        return data;
      });
  }

}
