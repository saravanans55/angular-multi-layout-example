import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';

const routes:Routes = [
  {
    path : "",
    component : LoginComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers : [],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
