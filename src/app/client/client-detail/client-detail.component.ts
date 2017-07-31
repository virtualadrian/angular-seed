import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from './../client.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import { Client } from 'app/client/client';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {
  id: string;
  clientData$: Observable<Client>;
  subscription: Subscription;
  constructor(private cartService: ClientService,
    private activatedRoute: ActivatedRoute,
    private location: Location) {
    this.subscription = this.activatedRoute.params
      .subscribe((params: any) => {
        this.id = params['id'];
        this.clientData$ = this.cartService.getClient( this.id );
      })
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back()
  }
}
