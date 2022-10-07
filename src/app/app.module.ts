import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Ajoute cette ligne là
import { FormsModule } from '@angular/forms'; /// necessaire poour le formulaire sign up
//*****formulaire */
import { AppComponent } from './app.component';
import { BlockComponentComponent } from './block-component/block-component.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RaclettComponent } from './raclett/raclett.component';
import { DirectivesComponent } from './directives/directives.component';
import { MenuComponent } from './menu/menu.component';

//Roting*************************************
import {RouterModule} from '@angular/router';
import { ROUTES } from './app.routes';
import { MyFormComponent } from './my-form/my-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginFormComponentComponent } from './login-form-component/login-form-component.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { AppMagicOvenComponent } from './app-magic-oven/app-magic-oven.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SkillComponent } from './skill/skill.component';
import { DeveloperComponent } from './developer/developer.component';
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
    SignUpComponent,
    LoginFormComponentComponent,
    ChildComponent,
    ParentComponent,
    KitchenComponent,
    AppMagicOvenComponent,
    PageNotFoundComponent,
    SkillComponent,
    DeveloperComponent,
    
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
  bootstrap: [AppComponent],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  
})
export class AppModule {
  name:string=""
 }
