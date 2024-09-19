import { Routes } from '@angular/router';

export const SECURED_ROUTES:Routes = [
  {
    path : "dashboard",
    loadChildren : ()=> import('./dashboard/dashboard.module').then(
      (m) => m.DashboardModule
    )
  },
  {
    path : "profile",
    loadChildren : ()=> import('./profile/profile.module').then(
      (m) => m.ProfileModule
    )
  }
];
