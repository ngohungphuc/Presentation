import { createFeatureSelector, createSelector } from "@ngrx/store";

import { PostState, selectAll } from "../reducers/post.reducer";
import { POST_FEATURE } from "../../../core/models/store.key.model";

export const selectPostState = createFeatureSelector<PostState>(
  POST_FEATURE.storekey
);

export const selectAllPosts = createSelector(
  selectPostState,
  selectAll
);
