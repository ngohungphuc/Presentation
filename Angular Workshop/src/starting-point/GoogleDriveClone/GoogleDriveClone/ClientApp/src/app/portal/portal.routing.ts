import { Routes } from "@angular/router";

import { IndexComponent } from "./index/index.component";

export const portalRoutes: Routes = [
  {
    path: "",
    component: IndexComponent,
    children: [/*
      { path: "login", component: LoginComponent },
      { path: "register-account", component: RegisterComponent } */
    ]
  }
];
