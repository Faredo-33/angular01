import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Ajoute cette ligne là
import { FormsModule } from '@angular/forms'; /// necessaire poour le formulaire sign up
//*****formulaire */
import { AppComponent } from './app.component';
import { BlockComponentComponent } from './block-component/block-component.component';
import { UserProfileComponent } from './menu/user-profile/user-profile.component';
import { RaclettComponent } from './raclett/raclett.component';
import { DirectivesComponent } from './menu/directives/directives.component';
import { MenuComponent } from './menu/menu.component';

//Roting*************************************
import {RouterModule} from '@angular/router';
import { ROUTES } from './app.routes';
import { MyFormComponent } from './my-form/my-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
// *******************************************


@NgModule({
  declarations: [
    AppComponent,
    BlockComponentComponent,
    UserProfileComponent,
    RaclettComponent,
    DirectivesComponent,
    MenuComponent,
    MyFormComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Ajoute cette ligne là
    // routing***************************************************************
    RouterModule.forRoot(ROUTES)
    ,
    // routing*****************************************************************

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  name:string=""
 }
