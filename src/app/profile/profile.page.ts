import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {
  constructor(private navCtrl:NavController) { }
  ngOnInit() {}
  
  backButtonClick() {
    this.navCtrl.pop();
  }
}



