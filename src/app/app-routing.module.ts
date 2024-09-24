import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',  // Root path for public routes
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)  // Lazy load PublicModule
  },
  {
    path: '',  // Path for secured routes
    loadChildren: () => import('./secured/secured.module').then(m => m.SecuredModule)  // Lazy load SecuredModule
  },
  {
    path: '**',
    redirectTo: ''  // Redirect to root for any undefined paths
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
