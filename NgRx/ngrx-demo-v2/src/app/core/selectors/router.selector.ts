import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromRouter from "@ngrx/router-store";
import { getSelectors } from "@ngrx/router-store";

import { selectPostsEntities } from "../../post/store/selectors/post.selector";
import { State } from "../reducers";

export const selectRouter = createFeatureSelector<
  State,
  fromRouter.RouterReducerState<any>
>("router");

export const getPostById = createSelector(
  selectPostsEntities,
  selectRouter,
  (postEntities, router) => {
    return router.state && postEntities[router.navigationId];
  }
);

const {
  selectQueryParams, // select the current route query params
  selectRouteParams, // select the current route params
  selectRouteData, // select the current route data
  selectUrl // select the current url
} = getSelectors(selectRouter);
