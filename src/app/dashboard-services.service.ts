import { Injectable } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';  //in webservices case
import 'rxjs/add/operator/map'

@Injectable()
export class DashboardServicesService {

  constructor(private http:Http) { }


  hotelList(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts').map((res:Response)=>res.json());
  }
  getPost(id){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id).map((res:Response)=>res.json());
  }
 
}
