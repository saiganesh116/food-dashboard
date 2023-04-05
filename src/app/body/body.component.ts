import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{

  foods:foods[]=[];
constructor(private fs:FoodService,private router:ActivatedRoute,public rtr:Router){}

ngOnInit(): void {
  this.router.params.subscribe(params =>{
    if(params['searchItem'])
    this.foods = this.fs.getall().filter(food =>food.Name.toLowerCase().includes(params['searchItem'].toLowerCase()))
    else if(params['tag'])
    this.foods = this.fs.getallFoodByTag(params['tag'])
    else
    this.foods = this.fs.getall();
  }) 
}
LogoutUser(){
  localStorage.clear();
  this.rtr.navigate(["login"]);
}
}
