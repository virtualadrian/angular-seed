import { Map, fromJS } from 'immutable';
import { Client } from 'app/client/client';
import * as clientActions from './../actions/actions';
import { ClientStateRecord, IClientState } from './../states/client.state';

export const initialState: IClientState = new ClientStateRecord() as IClientState;

export function ClientReducer(
  state = initialState,
  action: clientActions.Actions): IClientState {
  switch (action.type) {

    case clientActions.GET_CLIENT_SUCCESS: {
      const ids = state.clientIds;
      const entities = state.clientEntities;
      const id = action.payload.id;
      const client = action.payload;
      return state.merge({
        clientIds: ids.push(action.payload.id),
        clientEntities: entities.merge({ [id]: client }),
        selectedClient: action.payload
      }) as IClientState
    }

    case clientActions.GET_ALL_CLIENTS_SUCCESS: {
      const clients = action.payload as Client[];
      const clientIds = clients.map( (clientData) => clientData.id );

      const clientEntities = clients.reduce( (_clients: { [id: string]: Client }, client: Client ) => {
        return Object.assign(_clients, {
          [client.id]: client
        });
      }, { });

      return state.merge({
        clientIds: clientIds,
        clientEntities: clientEntities
      }) as IClientState;
    }

    case clientActions.SAVE_CLIENT_DATA_SUCCESS: {

      let ids = state.clientIds;
      const entities = state.clientEntities;
      const id = action.payload.id;
      const client = action.payload;

      ids = ids.push(id);

      const newEntity = Map({
        [id]: client
      })

      const newEntities = entities.merge(newEntity);

      return state.merge({
        clientIds: ids,
        clientEntities: newEntities,
        selectedClient: fromJS({})
      }) as IClientState;
      // return;
    }

    default:
      return state;
  }
}


export const getEntities = (state: IClientState) => state.clientEntities.toJS();
export const getIds = (state: IClientState) => state.clientIds.toJS();
export const getSelectedClient = (state: IClientState) => state.selectedClient.toJS();
export const getSelectedClientId = (state: IClientState) => state.selectedClientId;

