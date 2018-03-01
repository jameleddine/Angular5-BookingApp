import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {DashboardServicesService} from './../../../dashboard-services.service'
import { HttpModule } from '@angular/http'; //in webservice case

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[DashboardServicesService]
})
export class DashboardComponent implements OnInit {
  hotel:any=[];
  constructor(private hotelApi : DashboardServicesService, public router : Router ) { }

  ngOnInit() {
    this.hotelApi.hotelList().subscribe(data=>this.hotel=data)
    console.log(this.hotel);
    
  }
  hotelDetails(h){
    console.log(h);
    this.router.navigate(['/hotel',h.id]) 

  }

}
