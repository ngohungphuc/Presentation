import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  //lazy load feature module
  { path: "account", loadChildren: "./account/account.module#AccountModule" },
  { path: "**", redirectTo: "account", pathMatch: "full" }
];
