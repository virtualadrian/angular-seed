import { AppState } from './../../interfaces';
import * as fromClientSelector from './../store/reducers/selector';
import { GetAllClientsAction } from './../store/actions/actions';
import * as actions from 'app/client/store/actions/actions';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from 'app/client/client';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  clientData$: Observable<Client[]>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.clientData$ = this.store.select(fromClientSelector.getClients);
  }

  ngOnInit() {
    this.store.dispatch( new actions.GetAllClientsAction() );
  }

  addNew() {
    this.router.navigate(['client', 'new']);
  }

}
