import { OrderListModule } from 'primeng/orderlist';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';  // Import RouterModule
import { SecuredLayoutComponent } from './secured-layout/secured.layout.component';
import { SECURED_ROUTES } from './secured.routes';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrimengExampleComponent } from './primeng-example/primeng-example.component';
import { CarouselModule } from 'primeng/carousel';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
// import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragDropModule } from 'primeng/dragdrop';
import { FormsModule } from '@angular/forms';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { ImageHandlingComponent } from './image-handling/image-handling.component';
import { MatCardModule } from '@angular/material/card';
import { ImageHandlingV2Component } from './image-handling-v2/image-handling-v2.component';

@NgModule({
  declarations: [
    SecuredLayoutComponent,
    DashboardComponent,
    ProfileComponent,
    PrimengExampleComponent,
    OrderlistComponent,
    ImageHandlingComponent,
    ImageHandlingV2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SECURED_ROUTES),
    RouterOutlet,
    CarouselModule,
    MatIconModule,
    MatCheckboxModule,
    DragDropModule,
    OrderListModule,
    FormsModule,
    MatCardModule,
  ],
  exports: [SecuredLayoutComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class SecuredModule { }
