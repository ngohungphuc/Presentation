import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { IPost } from "../shared/models/post.model";
import { IPostManagementState } from "../shared/reducers";
import { GetAllPosts } from "../shared/actions/post.action";
import { selectPostList } from "../shared/selectors";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  public posts$: Observable<IPost[]>;
  constructor(private store: Store<IPostManagementState>) {}
  ngOnInit(): void {
    this.store.dispatch(new GetAllPosts());
    this.posts$ = this.store.pipe(select(selectPostList));
  }
}
