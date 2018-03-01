import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
pseudo : string;
password: string;
users : any = [];
  constructor(private router : Router) { }

  ngOnInit() {
  }

  login(){
    let j = 0;
    console.log('hello');
    if(localStorage.getItem('user')){
      this.users = JSON.parse(localStorage.getItem('user'));
      for(let i = 0; i<this.users.length ; i++){
        if(this.users[i].email == this.pseudo && this.users[i].password == this.password){
          this.router.navigate(['/dashboard'])          
        }
        else{
          j++
        }
      }
      if(j==this.users.length){
        alert('verifier vos info');
      }
    }
    else
    {
      alert("veillez s'inscrire svp");
      this.router.navigate(['/inscription'])        
    }
  }

}
