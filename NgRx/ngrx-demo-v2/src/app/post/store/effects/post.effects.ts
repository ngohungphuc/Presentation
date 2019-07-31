import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { map, catchError, switchMap, tap } from "rxjs/operators";
import { of } from "rxjs";
import { Router } from "@angular/router";

import { PostService } from "../services/post.service";
import * as PostActions from "../actions/post.actions";
import { IPost } from "../models/post.model";

@Injectable()
export class PostEffects {
  constructor(
    private actions$: Actions,
    private postService: PostService,
    private router: Router
  ) {}

  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.LoadPosts),
      switchMap(_ => {
        return this.postService
          .getPosts()
          .pipe(
            map(
              (posts: IPost[]) => PostActions.LoadPostsSuccess({ posts }),
              catchError(errors => of(PostActions.LoadPostsFail(errors)))
            )
          );
      })
    )
  );

  getPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.LoadPost),
      switchMap(action => {
        return this.postService
          .getPost(action.postId)
          .pipe(
            map(
              (post: IPost) => PostActions.LoadPostSuccess({ post }),
              catchError(errors => of(PostActions.LoadPostFail(errors)))
            )
          );
      })
    )
  );

  getPostSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PostActions.LoadPostSuccess),
        tap(_ => this.router.navigate(["posts/details"]))
      ),
    { dispatch: false }
  );
}
