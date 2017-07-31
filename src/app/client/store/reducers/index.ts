import { AppState } from './../../../interfaces';
import { createSelector } from 'reselect';
import { Map, List, fromJS } from 'immutable';
import { IClientState } from 'app/client/store/states/client.state';

// Base client state selector function
export function getClientState( state: AppState ): IClientState {
  return state.clients;
}

// ******************** Individual selectors ***************************

export function fetchClients ( state: IClientState ) {
  const ids = state.clientIds.toJS();
  const clientEntities = state.clientEntities.toJS();
  return ids.map( (id) => clientEntities[id]);
}

export function fetchSelectedClient( state: IClientState ) {
  return state.selectedClient;
}

// **************** PUBLIC API's **************

export const getClients = createSelector( getClientState, fetchClients );
export const getSelectedClient = createSelector( getClientState, fetchSelectedClient);
