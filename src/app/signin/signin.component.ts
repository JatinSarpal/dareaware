import { Component, OnInit } from '@angular/core';
import { SigninModel } from '../models/Signin-model';
import { NavController } from '@ionic/angular';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  signinModel: SigninModel = {
    
    email: '',
    password:''
  };

  constructor(private accountService: AccountService,
    private navCtrl: NavController) { }

  ngOnInit() {
   
  }
  signin(){
    debugger;
  this.accountService.signin(this.signinModel)
  .then((x: any) => {
    localStorage.setItem('access_token', x.access_token);
    localStorage.setItem('email', this.signinModel.email);
    
    this.navCtrl.navigateRoot('/profile');
  })
  .catch(err => {
    if (err.status == '400') {

    }
    console.log(err);
  });
}}

