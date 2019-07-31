import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";

export const appRoutes: Routes = [
  {
    path: "posts",
    loadChildren: () => import("./post/post.module").then(p => p.PostModule)
  }
];
