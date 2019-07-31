import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";

import { IPost } from "../../store/models/post.model";
import { PostState } from "../../store/reducers/post.reducer";
import { selectedPost } from "../../store/selectors/post.selector";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.scss"]
})
export class PostDetailComponent implements OnInit {
  public selectedPost$: Observable<IPost>;
  constructor(private store: Store<PostState>) {}

  ngOnInit() {
    this.selectedPost$ = this.store.pipe(select(selectedPost));
  }
}
