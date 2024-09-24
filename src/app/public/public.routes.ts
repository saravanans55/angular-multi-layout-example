import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PublicLayoutComponent } from './public-layout/public.layout.component';

export const PUBLIC_ROUTES:Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path : "",
        redirectTo: 'login',
        pathMatch : "full"
      },
      {
        path : "login",
        component : LoginComponent
      },
      {
        path : "signup",
        component : SignupComponent
      }
    ]
  }
];
