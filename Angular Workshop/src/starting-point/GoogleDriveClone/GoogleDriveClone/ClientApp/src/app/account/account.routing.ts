import { Routes } from "@angular/router";

import { RegisterComponent } from "./register/register.component";
import { AccountComponent } from "./account/account.component";
import { LoginComponent } from "./login/login.component";

export const accountRoutes: Routes = [
  {
    path: "account",
    component: AccountComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register-account", component: RegisterComponent }
    ]
  }
];
