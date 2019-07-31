import { createReducer, on } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import * as PostActions from "../actions/post.actions";

import { IPost } from "../models/post.model";

export interface PostState extends EntityState<IPost> {
  selectedPost: IPost;
}

const postAdapter: EntityAdapter<IPost> = createEntityAdapter<IPost>();

const initialState: PostState = postAdapter.getInitialState({
  selectedPost: null
});

export const postReducer = createReducer(
  initialState,
  on(PostActions.LoadPostsSuccess, (state, { posts }) =>
    postAdapter.addAll(posts, state)
  ),
  on(PostActions.LoadPostSuccess, (state, { post }) => {
    return postAdapter.addOne(post, { ...state, selectedPost: post });
  })
);

export const { selectAll } = postAdapter.getSelectors();
