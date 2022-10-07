import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  firsname:string= "";
  lastname:string= "";
  age: number= 0;
  biography: string = "";

  skill: string[] = ["",""];

  constructor() { }

  ngOnInit(): void {
  }

}
