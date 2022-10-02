import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  title = "Bonjour";

  isAdmin: boolean = false;

  SignAdmin(){
    this.isAdmin= !this.isAdmin;

   }


  constructor() { }

  ngOnInit(): void {
  }

}
