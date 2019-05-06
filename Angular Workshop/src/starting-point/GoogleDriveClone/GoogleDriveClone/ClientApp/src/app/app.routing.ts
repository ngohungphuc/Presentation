import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AccountComponent } from "./account/account/account.component";
import { AccountModule } from "./account/account.module";

export const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" }
];
