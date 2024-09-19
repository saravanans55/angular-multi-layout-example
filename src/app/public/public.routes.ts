import { Routes } from '@angular/router';

export const PUBLIC_ROUTES:Routes = [
  {
    path : "",
    redirectTo: 'login',
    pathMatch : "full"
  },
  {
    path : "login",
    loadChildren : ()=> import('./login/login.module').then(
      (m) => m.LoginModule
    )
  },
  {
    path : "signup",
    loadChildren : ()=> import('./signup/signup.module').then(
      (m) => m.SignupModule
    )
  }
];
