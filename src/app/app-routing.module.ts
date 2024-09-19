import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/secured/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'public',  // Root path for public routes
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)  // Lazy load PublicModule
  },
  {
    path: 'secured',  // Path for secured routes
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
