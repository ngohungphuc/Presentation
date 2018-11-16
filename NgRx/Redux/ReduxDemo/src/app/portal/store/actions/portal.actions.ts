import {Action} from '@ngrx/store';

export enum PortalActionTypes {
  ADD_COMMENT = '[PORTAL] ADD_COMMENT'
}

export class AddComment implements Action {
  readonly type = PortalActionTypes.ADD_COMMENT;
  constructor(public payload: string) {}
}

export type PortalActionsUnion = AddComment;
