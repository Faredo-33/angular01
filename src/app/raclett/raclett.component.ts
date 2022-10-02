import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raclett',
  templateUrl: './raclett.component.html',
  styleUrls: ['./raclett.component.css']
})
export class RaclettComponent implements OnInit {

  title: string = 'Raclette party 🧀';

  isThisIngredientVital: boolean = true;
  isGuestListDisplayed: boolean = false;
  songList: string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon","Ya TAb TAb Nancy Ajram", "Takke Nassef Zeytoon "];

  constructor() { }

  ngOnInit(): void {
  }

}
