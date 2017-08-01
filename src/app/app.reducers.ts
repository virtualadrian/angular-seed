import { environment } from './../environments/environment.prod';
import { AppState as State } from './interfaces';
import { ClientReducer } from 'app/client/store/reducers/clients';
import { combineReducers, ActionReducer } from '@ngrx/store';

const reducers = {
  clients: ClientReducer
}

export const developmentReducer: ActionReducer<State> = combineReducers(reducers)
export const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}
