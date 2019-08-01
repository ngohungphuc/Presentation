import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { IPost } from "../../store/models/post.model";
import { PostState } from "../../store/reducers/post.reducer";
import { getPostById } from "../../../core/selectors/router.selector";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.scss"]
})
export class PostDetailComponent implements OnInit {
  public post$: Observable<IPost>;

  constructor(private store: Store<PostState>) {}

  ngOnInit() {
    this.post$ = this.store.pipe(select(getPostById));
  }
}
