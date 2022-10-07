import { Component, OnInit } from '@angular/core';
import { Userform } from '../userform';

@Component({
  selector: 'app-login-form-component',
  templateUrl: './login-form-component.component.html',
  styleUrls: ['./login-form-component.component.css']
})
export class LoginFormComponentComponent  {

  constructor() { }

   // Tu instancies ton objet avec des valeurs initiales ( bien préciser les 4 partie diff avec des "" )
   model: Userform = new Userform ("Password", "Email");

  onSubmit(): void{
    //form submited
    console.log('Formulaire envoyé !')
    // formulaire avec model
    console.log(this.model);
    // save(f: User, isValid: boolean) {
    // }
  }
}
