import * as fromPortal from './reducers/portal.reducers';
import * as fromRoot from '@core/store/reducers/index';

import { PortalState } from './reducers/portal.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
  portal: PortalState;
}

export const selectPortalState = createFeatureSelector<PortalState>('portalModule');

export const selectCommentState = createSelector(
  selectPortalState,
  fromPortal.getComments
);

