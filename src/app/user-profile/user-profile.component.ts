import { Component, OnInit } from '@angular/core';
import { __asyncGenerator } from 'tslib';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
  
})
export class UserProfileComponent implements OnInit {
public displayAge:boolean =true;
  user = {
    name : 'Doe',
    firstName : 'John',
     age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  //  // C:\Users\Farid AL BARAZI\angular\AngularApp01\src\assets\2.jpg
  //   photo: "src/assets/2.jpg"
  };
  hideAge(){
    this.displayAge= !this.displayAge;
   }

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
