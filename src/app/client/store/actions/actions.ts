import { Client } from 'app/client/client';
import { Action } from '@ngrx/store';

export const GET_CLIENT = 'GET_CLIENT';
export const GET_CLIENT_SUCCESS = 'GET_CLIENT_SUCCESS';
export const GET_ALL_CLIENTS = 'GET_ALL_CLIENTS';
export const GET_ALL_CLIENTS_SUCCESS = 'GET_ALL_CLIENTS_SUCCESS';
export const SAVE_CLIENT_DATA = 'SAVE_CLIENT_DATA';
export const SAVE_CLIENT_DATA_SUCCESS = 'SAVE_CLIENT_DATA_SUCCESS';

export class GetClientAction implements Action {
  readonly type = GET_CLIENT;
  constructor( public payload: string ) { }
}

export class GetClientSuccessAction implements Action {
  readonly type = GET_CLIENT_SUCCESS;
  constructor( public payload: Client ) { }
}

export class GetAllClientsAction implements Action {
  readonly type = GET_ALL_CLIENTS;
  constructor( public payload: any ) { }
}

export class GetAllClientsSuccessAction implements Action {
  readonly type = GET_ALL_CLIENTS_SUCCESS;
  constructor( public payload: Client[] ) { }
}

export class SaveDataAction implements Action {
  readonly type = SAVE_CLIENT_DATA;
  constructor( public payload: Client ) { }
}

export class SaveDataSuccessAction implements Action {
  readonly type = SAVE_CLIENT_DATA_SUCCESS;
  constructor( public payload: Client ) { }
}

export type ClientActions =
  GetClientAction
  | GetClientSuccessAction
  | GetAllClientsAction
  | GetAllClientsSuccessAction
  | SaveDataAction
  | SaveDataSuccessAction

