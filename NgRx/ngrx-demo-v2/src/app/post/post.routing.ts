import { Routes } from "@angular/router";
import { PostContainerComponent } from "./components/post-container/post-container.component";
import { PostDetailComponent } from "./components/post-detail/post-detail.component";

export const postRoutes: Routes = [
  { path: "", component: PostContainerComponent },
  { path: "details", component: PostDetailComponent }
];
