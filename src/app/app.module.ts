import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { ImageEditorModule } from '@syncfusion/ej2-angular-image-editor';

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
    MatIconModule,
    ImageEditorModule
  ],
  providers : [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {}
