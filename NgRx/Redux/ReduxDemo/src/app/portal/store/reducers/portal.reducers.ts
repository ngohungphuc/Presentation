import {PortalActionsUnion, PortalActionTypes} from '../actions/portal.actions';

export interface PortalState {
  comment: string;
}

export const initialState: PortalState = {
  comment: 'some comments'
};

export function reducer(state: PortalState = initialState, action: PortalActionsUnion): PortalState {
  switch (action.type) {
    case PortalActionTypes.ADD_COMMENT:
      return {
        ...state,
        comment: action.payload
      };
    default:
      return state;
  }
}

export const getComments = (state: PortalState) => state.comment;

