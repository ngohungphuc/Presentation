import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AuthGuardService } from "./core/services/portal.guard";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },

  //{ path: "**", redirectTo: "account", pathMatch: "full" },
  //lazy load feature module
  { path: "account", loadChildren: "./account/account.module#AccountModule" },
  { path: "portal", loadChildren: "./portal/portal.module#PortalModule", canActivate: [AuthGuardService] },
  { path: "**", redirectTo: "account", pathMatch: "full" },
];
