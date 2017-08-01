import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ClientService } from './../../client.service';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as clientAction from './../actions/actions';

@Injectable()
export class ClientEffects {
  constructor(private actions$: Actions,
    private clientService: ClientService
  ) { }

  // tslint:disable-next-line:member-ordering
  @Effect()
  GetAllClients$: Observable<Action> = this.actions$
    .ofType(clientAction.GET_ALL_CLIENTS)
    .switchMap((action: Action) => this.clientService.getClients())
    .map((data) => new clientAction.GetAllClientsSuccessAction(data))

  // tslint:disable-next-line:member-ordering
  @Effect()
  GetClient$: Observable<Action> = this.actions$
    .ofType(clientAction.GET_CLIENT)
    .switchMap((action: clientAction.GetClientAction) => this.clientService.getClient(action.payload))
    .map((data) => new clientAction.GetClientSuccessAction(data));

  // tslint:disable-next-line:member-ordering
  @Effect()
  SaveClient$: Observable<Action> = this.actions$
    .ofType(clientAction.SAVE_CLIENT_DATA)
    .switchMap((action: clientAction.SaveDataAction) => this.clientService.saveClientData(action.payload))
    .map((data) => new clientAction.SaveDataSuccessAction(data));


  // tslint:disable-next-line:member-ordering
  @Effect()
  UpdateClient$: Observable<Action> = this.actions$
    .ofType(clientAction.UPDATE_DATA)
    .switchMap((action: clientAction.UpdateDataAction) => this.clientService.updateData(action.payload))
    .map((data) => new clientAction.UpdateDataSuccessAction(data));

}
