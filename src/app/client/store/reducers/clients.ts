import { Client } from 'app/client/client';
import * as clientActions from './../actions/actions';
import { ClientStateRecord, IClientState } from './../states/client.state';
import { ClientActions } from 'app/client/store/actions/actions';

export const initialState: IClientState = new ClientStateRecord() as IClientState;

export function reducer(
  state = initialState,
  action: ClientActions): IClientState {
  switch (action.type) {

    case clientActions.GET_CLIENT_SUCCESS: {
      const ids = state.clientIds;
      const entities = state.clientEntities;
      const id = action.payload.id;
      const client = action.payload;

      return state.merge({
        clientIds: ids.push(action.payload.id),
        clientEntities: entities.merge({ [id]: client })
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
      const ids = state.clientIds;
      const entities = state.clientEntities;
      const id = action.payload.id;
      const client = action.payload;

      return state.merge({
        clientIds: ids.push(id),
        clientEntities: entities.merge({ [id]: client })
      }) as IClientState
    }
  }
}

