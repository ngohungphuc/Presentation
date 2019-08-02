import { createReducer, on } from "@ngrx/store";
import {
  EntityState,
  EntityAdapter,
  createEntityAdapter,
  Update
} from "@ngrx/entity";

import * as PostActions from "../actions/post.actions";

import { IPost } from "../models/post.model";

export interface PostState extends EntityState<IPost> {
  selectedPost: IPost;
  errors: any;
}

const postAdapter: EntityAdapter<IPost> = createEntityAdapter<IPost>();

const initialState: PostState = postAdapter.getInitialState({
  selectedPost: null,
  errors: null
});

export const postReducer = createReducer(
  initialState,
  on(PostActions.LoadPostsSuccess, (state, { posts }) =>
    postAdapter.addAll(posts, state)
  ),
  on(PostActions.LoadPostSuccess, (state, { post }) => {
    return postAdapter.addOne(post, { ...state, selectedPost: post });
  }),
  on(PostActions.UpdatePost, (state, { post }) => {
    return postAdapter.updateOne(post, state);
    //return postAdapter.updateOne(post, { ...state, selectedPost: post });
  }),
  on(PostActions.UpdateSelectedPost, (state, { selectedPost }) => {
    console.log(selectedPost);
    return { ...state, selectedPost };
  }),

  //catch errors
  on(
    PostActions.LoadPostsFail,
    PostActions.LoadPostFail,
    PostActions.UpdatePostFail,
    (state, { errors }) => {
      return { ...state, errors };
    }
  )
);

export const { selectAll } = postAdapter.getSelectors();
