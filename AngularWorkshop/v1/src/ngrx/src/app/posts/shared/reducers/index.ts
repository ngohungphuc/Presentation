import { ActionReducerMap } from "@ngrx/store";
import { IPostState, postReducer } from "./post.reducer";

export interface IPostManagementState {
  IPostManagement: IPostState;
}

export const postReducers: ActionReducerMap<IPostManagementState> = {
  IPostManagement: postReducer
};
