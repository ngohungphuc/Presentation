import { Action } from "@ngrx/store";
import { IPost } from "../models/post.model";

export enum PostActionTypes {
  GetAllPosts = "[POST] GetAllPosts",
  GetAllPostsSuccess = "[POST] GetAllPostsSuccess",
  GetAllPostsFail = "[POST] GetAllPostsFail"
}

export class GetAllPosts implements Action {
  readonly type = PostActionTypes.GetAllPosts;
}

export class GetAllPostsSuccess implements Action {
  readonly type = PostActionTypes.GetAllPostsSuccess;
  constructor(public posts: IPost[]) {}
}

export class GetAllPostsFail implements Action {
  readonly type = PostActionTypes.GetAllPostsFail;
  constructor(public errors: any) {}
}

export type PostActions = GetAllPosts | GetAllPostsSuccess | GetAllPostsFail;
