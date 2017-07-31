import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ClientActions } from 'app/client/store/actions/actions';
import { ClientService } from './../../client.service';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as clientAction from './../actions/actions';

@Injectable()
export class ClientEffects {
  constructor ( private actions$: Actions,
                private clientService: ClientService
              ) { }

  // tslint:disable-next-line:member-ordering
  @Effect()
    GetAllClients$: Observable<Action> = this.actions$
      .ofType(clientAction.GET_ALL_CLIENTS)
      .switchMap( (action: clientAction.ClientActions) => this.clientService.getClients())
      .map( (data) => new clientAction.GetAllClientsSuccessAction(data))

  // tslint:disable-next-line:member-ordering
  @Effect()
    GetClient$: Observable<Action> = this.actions$
    .ofType(clientAction.GET_CLIENT)
    .switchMap( (action: clientAction.ClientActions) => this.clientService.getClient(action.payload))
    .map((data) => new clientAction.GetClientSuccessAction(data));
}
