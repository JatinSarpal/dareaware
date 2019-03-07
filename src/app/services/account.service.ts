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
      .post(`${this.baseUrl}/login`, signinModel).toPromise();

  }

  signUp(signupModel: SignupModel) {
    return this.mainService
      .post(`${this.baseUrl}/register`, signupModel).toPromise();
  }
}

