import { Component, OnInit } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  {

  
  constructor() { }

   // Tu instancies ton objet avec des valeurs initiales ( bien préciser les 4 partie diff avec des "" )
   model: User = new User ("farid", "Al Barazi", "Password", "Email");

  onSubmit(): void{
    //form submited
    console.log('Formulaire envoyé !')
    // formulaire avec model
    console.log(this.model);
    // save(f: User, isValid: boolean) {
    // }

  }

}

 




