import { Component, OnInit } from '@angular/core';
import {AppPipePipe} from '../../../app-pipe.pipe'
import {HttpClient} from '@angular/common/http';

import {TranslateService} from '@ngx-translate/core';


import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  firstName : string ;
  lastName : string ;
  email: string ;
  password : string;
  confirmPassword : string = '';
  adress : string;
  phone: number = +216;
  verifPass :boolean;
  disabledBtn : boolean;
 results : any;
  users : any=[];
  myform: FormGroup;

  constructor(private http:HttpClient,private translate: TranslateService) {
   translate.addLangs(["en", "fr"]);
   translate.setDefaultLang('en');

   let browserLang = translate.getBrowserLang();
   translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
}


  ngOnInit() {
        this.myform = new FormGroup({
          first_name: new FormControl('', Validators.required), 
          last_name: new FormControl('', Validators.required),
            email: new FormControl('', [ 
                Validators.required,
                Validators.pattern("[^ @]*@[^ @]*") 
            ]),
            password: new FormControl('', [
                Validators.minLength(8), 
                Validators.required
            ]),
            password_confirmation: new FormControl('', [
              Validators.minLength(8), 
              Validators.required
          ]),
          phone: new FormControl(),
          adress: new FormControl() 
          
        });
      
    
    
  }
  confirm(){
    if(localStorage.getItem('user'))
    {
      this.users = JSON.parse(localStorage.getItem('user'))
    }
    console.log(this.users);
    let data = {
      firstName : this.firstName,
      lastName : this.lastName,
      email : this.email,
      confirmPassword : this.confirmPassword,
      password : this.password,
      adress : this.adress,
      phone: this.phone
    }
   
    console.log(this.indexEmail(data.email,this.users))
    if(this.users.length==0){
      this.users.push(data);
      localStorage.setItem("user",JSON.stringify(this.users));
    }
    else if(this.indexEmail(data.email,this.users)){
      this.users.push(data);
      localStorage.setItem("user",JSON.stringify(this.users));
    }
    else{
      alert("user existe deja");
    }
  }

  indexEmail(email, tabUsers){
    for(let i = 0 ; i<tabUsers.length; i++){
      if(email == tabUsers[i].email){
        return false
      } 
    }
    return true;
  }

  confirmPass(){
    if(this.password!=this.confirmPassword){
      this.verifPass = false;
      this.disabledBtn = true;
      
    }
    else{
      this.verifPass = true;
      this.disabledBtn = false;
    }

  }


}
