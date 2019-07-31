import { createAction, props } from "@ngrx/store";
import { IPost } from "../models/post.model";

export enum PostActionTypes {
  LoadPosts = "[Post] Load Posts",
  LoadPostsSuccess = "[Post] Load Posts Success",
  LoadPostsFail = "[Post] Load Posts Fail",
  LoadPost = "[Post] Load Post",
  LoadPostSuccess = "[Post] Load Post Success",
  LoadPostFail = "[Post] Load Post Fail"
}

export const LoadPosts = createAction(PostActionTypes.LoadPosts);
export const LoadPostsSuccess = createAction(
  PostActionTypes.LoadPostsSuccess,
  props<{ posts: IPost[] }>()
);
export const LoadPostsFail = createAction(
  PostActionTypes.LoadPostsFail,
  props<{ errors: any }>()
);

export const LoadPost = createAction(
  PostActionTypes.LoadPost,
  props<{ postId: number }>()
);
export const LoadPostSuccess = createAction(
  PostActionTypes.LoadPostSuccess,
  props<{ post: IPost }>()
);
export const LoadPostFail = createAction(
  PostActionTypes.LoadPostFail,
  props<{ errors: any }>()
);
