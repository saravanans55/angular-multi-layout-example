import { Routes } from '@angular/router';
import { SecuredLayoutComponent } from './secured-layout/secured.layout.component';
import { PrimengExampleComponent } from './primeng-example/primeng-example.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { ImageHandlingComponent } from './image-handling/image-handling.component';
import { ImageHandlingV2Component } from './image-handling-v2/image-handling-v2.component';

export const SECURED_ROUTES:Routes = [
  {
    path: '',
    component: SecuredLayoutComponent,
    children: [
      {
        path : "primeng",
        component : PrimengExampleComponent
      },
      {
        path : "orderlist",
        component : OrderlistComponent
      },
      {
        path : "custom-image-handling",
        component : ImageHandlingComponent
      },
      {
        path : "custom-image-handling-v2",
        component : ImageHandlingV2Component
      }
    ]
  }
];
