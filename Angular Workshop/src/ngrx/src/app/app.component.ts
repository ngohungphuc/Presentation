import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { IPostManagementState } from "./posts/shared/reducers";
import { GetAllPosts } from "./posts/shared/actions/post.action";
import { Observable } from "rxjs";
import { IPost } from "./posts/shared/models/post.model";
import { selectPostList } from "./posts/shared/selectors";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "ngrx";
  public posts$: Observable<IPost[]>;
  constructor(private store: Store<IPostManagementState>) {}
  ngOnInit(): void {
    this.store.dispatch(new GetAllPosts());
    this.posts$ = this.store.pipe(select(selectPostList));
  }
}
