import { AppState } from './../../../interfaces';
import { IClientState } from 'app/client/store/states/client.state';
import * as fromClient from './clients';

export interface ClientState {
  clients: IClientState
}

export interface State extends AppState {
  'clients': ClientState
}

export const reducers = {
  clients: fromClient.ClientReducer
}
