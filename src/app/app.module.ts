import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Ajoute cette ligne là
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlockComponentComponent } from './block-component/block-component.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RaclettComponent } from './raclett/raclett.component';
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponentComponent,
    UserProfileComponent,
    RaclettComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Ajoute cette ligne là

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  name:string=""
 }
