import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  constructor(private loginService:LoginService){

  }
  
  ngOnInit(): void {

    firebase.initializeApp({
      apiKey:'AIzaSyDkvDcqfsChfVf2mzaH66B6n5ZCZZg9-W8',
      authDomain:''
    });
   
  }

  estaLogueado(){
    return this.loginService.gettEstaLogueado();
  }

  logout(){
    this.loginService.logout();
  }

  
 


}
