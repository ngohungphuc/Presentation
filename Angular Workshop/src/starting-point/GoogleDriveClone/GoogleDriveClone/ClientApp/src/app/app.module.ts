import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ServiceWorkerModule } from "@angular/service-worker";
import { ToastrModule } from "ngx-toastr";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AuthService } from "./core/services/auth.service";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";
import { environment } from "../environments/environment";
import { routes } from "./app.routing";
import { AuthGuardService } from "./core/services/portal.guard";
import { AuthHttpService } from './core/services/auth.http.service';

@NgModule({
  declarations: [AppComponent, NavMenuComponent, HomeComponent],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    //AccountModule
  ],
  providers: [AuthService, AuthGuardService, AuthHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
