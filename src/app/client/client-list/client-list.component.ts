import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from 'app/client/client';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  clientData$: Observable<Client[]>;
  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit() {
    this.clientData$ = this.clientService.getClients();
  }

  addNew() {
    this.router.navigate(['client', 'new']);
  }

}
