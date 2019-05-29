import { Routes } from "@angular/router";
import { ListPostComponent } from "./list/list.component";
import { DetailComponent } from "./detail/detail.component";

const postRoutes: Routes = [
  {
    path: "posts",
    component: ListPostComponent
  },
  {
    path: "detail/:id",
    component: DetailComponent
  }
];

export default postRoutes;
