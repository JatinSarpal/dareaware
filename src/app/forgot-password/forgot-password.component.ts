import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ForgotPasswordModel } from '../models/forgot-password-model';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  model: ForgotPasswordModel = new ForgotPasswordModel;
  successMessage:boolean = false;
  onLoaded() {
  }

  constructor(private accountService: AccountService,
    private navCtrl: NavController,
    ) { }

  ngOnInit() {
    
  }
//   forgotPassword($event:ForgotPasswordModel){
//     this.accountService.forgotPassword($event)
//  .then(data =>{
//    this.successMessage = true;
//  })
//  .catch((error) =>{});
  
//   }
  
}