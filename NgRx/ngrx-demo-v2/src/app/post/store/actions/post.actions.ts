import { createAction, props } from "@ngrx/store";
import { Update } from "@ngrx/entity";

import { IPost } from "../models/post.model";

export enum PostActionTypes {
  LoadPosts = "[Post] Load Posts",
  LoadPostsSuccess = "[Post] Load Posts Success",
  LoadPostsFail = "[Post] Load Posts Fail",
  LoadPost = "[Post] Load Post",
  LoadPostSuccess = "[Post] Load Post Success",
  LoadPostFail = "[Post] Load Post Fail",
  UpdatePost = "[Post] Update Post",
  UpdatePostFail = "[Post] Update Post Fail",
  UpdateSelectedPost = "[Post] Update Selected Post"
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

export const UpdatePost = createAction(
  PostActionTypes.UpdatePost,
  props<{ post: Update<IPost> }>()
);
export const UpdateSelectedPost = createAction(
  PostActionTypes.UpdateSelectedPost,
  props<{ selectedPost: IPost }>()
);
export const UpdatePostFail = createAction(
  PostActionTypes.UpdatePostFail,
  props<{ errors: any }>()
);
