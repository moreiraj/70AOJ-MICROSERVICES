import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router,   
                private api: ApiService,private formBuilder: FormBuilder) { }
  
username: string;
password: string;
intValida:number;

ngOnInit() {
}
login(username,password)  {
  this.api.getValidaUsuario(this.username,this.password)
      .subscribe(data =>{
        this.intValida = data
        if(this.intValida == 1){
          this.router.navigate(["usuarios"]);
         }else {
           alert("Invalid credentials");
         }
      })

}
}



