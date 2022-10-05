import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent  {

  
  constructor() { }

   // Tu instancies ton objet avec des valeurs initiales ( bien préciser les 4 partie diff avec des "" )
   model: Order = new Order("", 0, new Date(), "");

  onSubmit(): void{
    //form submited
    console.log('Formulaire envoyé !')
    // formulaire avec model
    console.log(this.model);
  }

}
