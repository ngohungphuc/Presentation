import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { AccountComponent } from "./account/account.component";
import { accountRoutes } from "./account.routing";

@NgModule({
  declarations: [RegisterComponent, LoginComponent, AccountComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(accountRoutes)
  ],
  exports: [RegisterComponent],
  providers: []
})
export class AccountModule {}
