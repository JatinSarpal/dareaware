import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {
  constructor(private location: Location) { }
  ngOnInit() {}
  
  backButtonClick() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}



