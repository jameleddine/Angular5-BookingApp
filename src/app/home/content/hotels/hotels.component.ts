import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {DashboardServicesService} from './../../../dashboard-services.service'
import { HttpModule } from '@angular/http'; //in webservice case

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
  providers : [DashboardServicesService]
})
export class HotelsComponent implements OnInit {
 id : string;
 hotel:any=[];
  constructor(private route: ActivatedRoute, private getHotelById : DashboardServicesService) { }

  ngOnInit() {
    this.route.params.subscribe( params => {this.id = params['id'];
    this.getHotelById.getPost(this.id).subscribe(data=>this.hotel=data) 
    
  }
  );
  }
 


}
