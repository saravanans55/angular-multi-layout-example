import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations : [
    AppComponent
  ],
  imports : [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterOutlet,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  providers : [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {}
