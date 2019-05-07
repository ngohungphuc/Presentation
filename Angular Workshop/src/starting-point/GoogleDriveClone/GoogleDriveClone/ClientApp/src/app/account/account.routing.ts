import { Routes } from "@angular/router";

import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { AccountComponent } from "./account/account.component";

export const accountRoutes: Routes = [
  {
    path: "",
    component: AccountComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register-account", component: RegisterComponent }
    ]
  }
];
