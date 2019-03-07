import { Component, OnInit } from '@angular/core';
import { SignupModel } from '../models/signup-model';
import { AccountService } from '../services/account.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  signupModel: SignupModel = {
    userName: '',
    email: '',
    password:''
  };

  constructor(private accountService: AccountService,
    private navCtrl: NavController) { }

  ngOnInit() {}

  signUp(){
    let data = this.signupModel;
    this.accountService.signUp(this.signupModel).then((response:any) => {
    })
    this.navCtrl.navigateForward('/profile'); 
  }

}
