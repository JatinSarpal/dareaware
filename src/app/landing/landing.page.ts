import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  form: FormGroup;
  PdfName: string ="assets/pdf/termsofuse.pdf";
  addClass:string='true';
  constructor(private platform:Platform,
    public formBuilder: FormBuilder,
    private navCtrl:NavController) { 

      
  
    }

  ngOnInit() {
    
  }
 
}
