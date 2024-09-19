import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';  // Import RouterModule
import { SecuredLayoutComponent } from './secured-layout/secured.layout.component';
import { SECURED_ROUTES } from './secured.routes';

const routes:Routes = [
  {
    path: '',
    component: SecuredLayoutComponent,
    children: SECURED_ROUTES  // Use PUBLIC_ROUTES here
  }
];

@NgModule({
  declarations: [
    SecuredLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [SecuredLayoutComponent]
})
export class SecuredModule { }
