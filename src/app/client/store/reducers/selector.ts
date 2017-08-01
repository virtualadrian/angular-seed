import { AppState } from './../../../interfaces';
import { createSelector } from 'reselect';
import { Map, List, fromJS } from 'immutable';
import { IClientState } from 'app/client/store/states/client.state';
import * as fromClient from './clients';

// Base client state selector funtion
export function getClientState (state: AppState ): IClientState {
  return state.clients
}

// ******************** Individual selectors ***************************
export const getIClientState = createSelector(
  getClientState,
  (state: IClientState) => state
)

export const getClientEntities = createSelector(
  getIClientState,
  fromClient.getEntities
)

export const getClientIds = createSelector(
  getIClientState,
  fromClient.getIds
)

export const getSelectedClientId = createSelector(
  getIClientState,
  fromClient.getSelectedClientId
)

export const getSelectedClient = createSelector(
  getIClientState,
  fromClient.getSelectedClient
)

export const getClients = createSelector(
  getClientEntities,
  getClientIds,
  (entities, ids) => ids.map((id) => entities[id])
)
