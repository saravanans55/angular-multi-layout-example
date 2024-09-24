import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SecuredLayoutComponent } from './secured-layout/secured.layout.component';

export const SECURED_ROUTES:Routes = [
  {
    path: '',
    component: SecuredLayoutComponent,
    children: [
      {
        path : "dashboard",
        component : DashboardComponent
      },
      {
        path : "profile",
        component : ProfileComponent
      }
    ]
  }
];
