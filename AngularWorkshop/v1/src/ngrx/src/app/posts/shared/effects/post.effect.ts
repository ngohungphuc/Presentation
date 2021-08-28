import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { PostService } from "../services/post.service";
import * as postActions from "../actions/post.action";

@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private postService: PostService) {}

  @Effect()
  loadPosts$: Observable<Action> = this.actions$.pipe(
    ofType<postActions.GetAllPosts>(postActions.PostActionTypes.GetAllPosts),
    switchMap(() => {
      return this.postService.getAllPosts().pipe(
        map(posts => {
          return new postActions.GetAllPostsSuccess(posts);
        }),
        catchError(err => of(new postActions.GetAllPostsFail(err)))
      );
    })
  );
}
