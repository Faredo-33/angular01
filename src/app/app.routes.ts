import { Routes } from "@angular/router";
import { DirectivesComponent } from "./menu/directives/directives.component";
import { UserProfileComponent } from "./menu/user-profile/user-profile.component";

const ROUTES: Routes = [
    
    { path: 'home', component: UserProfileComponent },

    { path: 'sign-up', component: DirectivesComponent },
    {path: "user-profile",component:UserProfileComponent},

  ];
  export {ROUTES};