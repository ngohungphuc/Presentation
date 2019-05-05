import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./account/register/register.component";

export const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent }
];
