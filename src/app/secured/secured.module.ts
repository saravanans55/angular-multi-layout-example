import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';  // Import RouterModule
import { SecuredLayoutComponent } from './secured-layout/secured.layout.component';
import { SECURED_ROUTES } from './secured.routes';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    SecuredLayoutComponent,
    DashboardComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SECURED_ROUTES),
    RouterOutlet
  ],
  exports: [SecuredLayoutComponent]
})
export class SecuredModule { }
