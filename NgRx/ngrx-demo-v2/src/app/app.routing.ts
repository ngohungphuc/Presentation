import { Routes } from "@angular/router";

export const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "posts",
    pathMatch: "full"
  },
  {
    path: "posts",
    loadChildren: () => import("./post/post.module").then(p => p.PostModule)
  }
];
