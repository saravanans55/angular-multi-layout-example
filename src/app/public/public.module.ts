import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from './public-layout/public.layout.component';
import { PUBLIC_ROUTES } from './public.routes';

const routes:Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: PUBLIC_ROUTES
  }
];

@NgModule({
  declarations: [
    PublicLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [PublicLayoutComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class PublicModule { }
