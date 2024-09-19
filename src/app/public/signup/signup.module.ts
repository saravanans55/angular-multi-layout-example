import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup.component';

const routes:Routes = [
  {
    path : "",
    component : SignupComponent
  }
]

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers : [],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class SignupModule { }
