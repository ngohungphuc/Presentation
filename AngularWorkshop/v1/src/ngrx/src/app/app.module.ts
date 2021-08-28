import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { AppComponent } from "./app.component";
import { reducers, metaReducers } from "./shared";
import { Routes, RouterModule } from "@angular/router";
import { PostModule } from "./posts/post.module";

export const appRoutes: Routes = [
  { path: "", redirectTo: "posts", pathMatch: "full" }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PostModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: "Ngrx app"
    }),
    RouterModule.forRoot(appRoutes),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
