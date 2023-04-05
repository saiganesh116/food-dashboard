import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public rtr:Router){}

  ngOnInit(): void {
    
  }
  LogoutUser(){
    localStorage.clear();
    this.rtr.navigate(["login"]);
  }

}

