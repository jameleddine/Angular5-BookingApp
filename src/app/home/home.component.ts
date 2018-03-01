import { Component, OnInit } from '@angular/core';
import {ServiceLoginService} from './../service-login.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [ServiceLoginService]
})
export class HomeComponent implements OnInit {
  location: boolean;
  constructor(public testUrl : ServiceLoginService) { }

  ngOnInit() {
  }
  ngDoCheck() {        
    this.location = this.testUrl.getURLInfo();
    console.log(this.location)       
  }
  

}
