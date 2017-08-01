import { GetClientAction } from './../store/actions/actions';
import { ClientState } from './../store/reducers/index';
import * as fromClient from './../store/reducers/index';
import * as fromClientSelector from './../store/reducers/selector';
import * as actions from 'app/client/store/actions/actions';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Client } from 'app/client/client';
import { ClientService } from './../client.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit, OnDestroy {
  clientEditForm: FormGroup;
  routeSub$: Subscription;
  clientSub$: Subscription;
  clientData$: Observable<Client>;
  clientData: Client;
  isFormSubmit = false;

  constructor(private clientService: ClientService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private store: Store<fromClient.ClientState>
  ) {
      this.clientEditForm = this.initForm();
  }

  ngOnInit() {
    this.routeSub$ = this.activatedRoute.params.subscribe((params: any) => {
      const id = params['id'];
      if (id) {
        this.store.dispatch(new actions.GetClientAction(id));
        this.clientSub$ = this.store.select(fromClientSelector.getSelectedClient).subscribe((data) => {
          this.clientEditForm = this.initForm(data);
        })
      }
    });
  }

  initForm(data?: Client) {
    const id = data ? data.id : '';
    const companyName = data ? data.name : '';
    const contactPerson = data ? data.contactPerson : '';
    const contactEmail = data ? data.contactEmail : '';
    const contactPhone = data ? data.contactPhone : '';

    return this.fb.group({
      id: [id],
      name: [companyName, Validators.required],
      contactPerson: [contactPerson, Validators.required],
      // tslint:disable-next-line:max-line-length
      // tslint:disable-next-line:quotemark
      contactEmail: [contactEmail, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")],
      contactPhone: [contactPhone, Validators.required]
    });
  }


  ngOnDestroy() {
    this.clientSub$.unsubscribe();
    this.routeSub$.unsubscribe();
  }

  onCancel() {
    this.router.navigate(['/client']);
  }

  goBack() {
    this.location.back();
  }

  onSubmit() {
      this.isFormSubmit = true;
      if (this.clientEditForm.invalid) {
        return;
      }
      this.store.dispatch( new actions.SaveDataAction(this.clientEditForm.value));
      this.router.navigate(['/client']);
  }

}
