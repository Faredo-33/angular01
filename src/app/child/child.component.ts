import { Component, OnInit } from '@angular/core';

//************************************** */
import { Input } from '@angular/core';
//************************************** */
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {


  // On initialise notre propriété avec une valeur par défaut
// On décore notre propriété avec @Input()
 @Input() myInputData: string = "" 

  constructor() { }

 
}
