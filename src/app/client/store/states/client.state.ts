import { Client } from './../../client';
import { Record, Map, List, fromJS } from 'immutable';

export interface IClientState extends Map<string, any> {
  clientIds: List<string>;
  clientEntities: Map<string, Client>;
  selectedClientId: string | null;
  selectedClient: any;
}

export const ClientStateRecord = Record ({
  clientIds: List([]),
  clientEntities: Map({}),
  selectedClientId: null,
  selectedClient: fromJS({})
});
