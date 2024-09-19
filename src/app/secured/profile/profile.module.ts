import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./profile.component";
import { RouterModule, Routes } from "@angular/router";

const routes:Routes = [
  {
    path : "",
    component : ProfileComponent
  }
]

@NgModule({
  declarations : [
    ProfileComponent
  ],
  imports : [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers : [],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})

export class ProfileModule {}
