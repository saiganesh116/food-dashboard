import { Injectable } from '@angular/core';
import { foods } from './shared/models/food';
import { Tag } from './shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): foods{
    return this.getall().find(food => food.id == id)!;
  }


  getallFoodByTag(tag:string):foods[]{
    return tag =="All"?
    this.getall(): this.getall().filter(food => food.tags?.includes(tag));
    //you can write this statement is very simple type lets do it.
  }

  getallTag():Tag[]{
    return[
      {name:'All', count:8},
      {name:'FastFood', count:4},
      {name:'Pizza', count:3},
      {name:'lunch', count:3},
      {name:'SlowFood', count:2},
      {name:'Hamburger', count:1},
      {name:'Fry', count:1},
      {name:'Soup', count:1},

    ]
  }

getall():foods[]{
  return[
    {
      id: 1,
      Name: 'Pizza Pepperoni',
      cookTime:'10-30',
      price:10,
      favorite: false,
      origins:['india'],
      star:4.5,
      imageUrl:'/assets/food-1.jpg',
      tags: ['Pizza','Fast Food'],
    
    },{
      id: 2,
      Name:'Meatball',
      cookTime:'20-50',
      price:20,
      favorite: true,
      origins:['india'],
      star: 5,
      imageUrl:'/assets/food-2.jfif',
      tags: ['FastFood','lunch'],
    
    },
    {
      id: 3,
      Name:'Hamburger',
      cookTime:'15-45',
      price: 5,
      favorite: true,
      origins:['india'],
      star: 5,
      imageUrl:'/assets/food-3.jpg',
      tags: ['FastFood','Hamburger'],
    
    },
    {
      id: 4,
      Name:'Fried Potatoes',
      cookTime: '20-50',
      price: 6,
      favorite: true,
      origins:['india','france'],
      star: 4.5,
      imageUrl:'/assets/food-4.jpg',
      tags: ['Fry'],
    
    },
    {
      id: 5,
      Name: 'Chicken Soup',
      cookTime: '20-50',
      price: 11,
      favorite: true,
      origins: ['india'],
      star: 5,
      imageUrl:'/assets/food-5',
      tags: ['Soup','SlowFood'],
    
    },
    {
      id: 6,
      Name:'Vegetable Pizza',
      cookTime: '20-50',
      price: 9,
      favorite: false,
      origins:['india'],
      star:4.5,
      imageUrl:'/assets/food-6.jpg',
      tags: ['FastFood','Pizza'],
    
    },
    {
      id: 7,
      Name:'Chicken Biryani',
      cookTime:'40-60',
      price:30,
      favorite:true,
      origins:['india'],
      star:5,
      imageUrl:'/assets/food-7.jpg',
      tags:  ['lunch','SlowFood'],
    
    },
    {
      id: 8,
      Name: 'Vegetable Mogento Pizza',
      cookTime:'10-15',
      price:5,
      favorite:true,
      origins:['india'],
      star:4.5,
      imageUrl:'/assets/food-8.jfif',
      tags: ['FastFood','Pizza','lunch'],
    
    }
  

  ]
}

}
