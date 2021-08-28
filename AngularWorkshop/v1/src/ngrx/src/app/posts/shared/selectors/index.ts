import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPostManagementState } from "../reducers";
import { posts_management_module } from "../models/post.model";

const selectPostManagementState = createFeatureSelector<IPostManagementState>(
  posts_management_module.storekey
);

const selectPostManagement = createSelector(
  selectPostManagementState,
  state => state.IPostManagement
);

export const selectPostList = createSelector(
  selectPostManagement,
  state => state.posts
);
