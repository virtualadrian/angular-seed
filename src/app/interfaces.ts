import { IClientState } from './client/store/states/client.state';

export interface AppState {
  clients: IClientState;
}
