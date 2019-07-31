import { createReducer, on } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import * as PostActions from "../actions/post.actions";

import { IPost } from "../models/post.model";

export interface PostState extends EntityState<IPost> {
  posts: IPost[];
}

const postAdapter: EntityAdapter<IPost> = createEntityAdapter<IPost>();

const initialState: PostState = postAdapter.getInitialState({
  posts: []
});

export const postReducer = createReducer(
  initialState,
  on(PostActions.LoadPostsSuccess, (state, { posts }) =>
    postAdapter.addAll(posts, state)
  )
);

export const { selectAll } = postAdapter.getSelectors();
