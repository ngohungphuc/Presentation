import { IPost } from "../models/post.model";
import { PostActions, PostActionTypes } from "../actions/post.action";

export interface IPostState {
  posts: IPost[];
}

export const initialState: IPostState = {
  posts: []
};

export function postReducer(
  state: IPostState = initialState,
  action: PostActions
): IPostState {
  switch (action.type) {
    case PostActionTypes.GetAllPostsSuccess:
      return {
        ...state,
        posts: action.posts
      };
    default:
      return state;
  }
}
