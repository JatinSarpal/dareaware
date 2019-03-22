import { Injectable, EventEmitter } from '@angular/core';
import { MainService } from './main.service';
import { environment } from '../../environments/environment';
import { SignupModel } from '../models/signup-model';
import { SigninModel } from '../models/Signin-model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl: string = `${environment.baseUrl}`;

  constructor(private mainService: MainService) {
  }

  signin(signinModel: SigninModel) {
    return this.mainService
      .post(`${this.baseUrl}login?username_email=`+signinModel.username_email+"&password="+signinModel.password, null).toPromise().then(data=>{
        return data;
      });
      //avcdd

  }

  signUp(signupModel: SignupModel) {
   
    return this.mainService
      .post(`${this.baseUrl}register?email_number=`+signupModel.email_number+"&username="+signupModel.username+"&password="+signupModel.password, null).toPromise().then(data => {
        return data;
      });;
  }

  // logout(){
  //     return this.mainService
  //     .post(`${this.baseUrl}notification/get` , notificationModel).toPromise();

  //    ,`5` 
  // }
}

