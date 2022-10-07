import { Component } from '@angular/core';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent  {


cook: boolean = false;
numberOfCookies: number = 0;
flourQuantity: number = 0;
saltQuantity: number = 0;
sugarQuantity: number = 0;
eggQuantity: number = 0;

isCooked: boolean = false;
constructor() { 
  
}

 // in app-kitchen

startCooking() {
  this.isCooked = true;


}
}
  

