import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes:Routes = [
  {
    path : '',
    component : DashboardComponent
  }
]
@NgModule({
  declarations : [
    DashboardComponent
  ],
  imports : [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers : [],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})

export class DashboardModule {}
