import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.login("test","etet").then((response: any) =>{
       debugger;
    });
  }

}
