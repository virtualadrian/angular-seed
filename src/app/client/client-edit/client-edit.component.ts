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
  id: string;
  clientEditForm: FormGroup;
  subscription: Subscription;
  clientData: Observable<Client>;

  constructor(private clientService: ClientService,
    private activatedRoute: ActivatedRoute,
    private formGroup: FormBuilder,
    private router: Router,
    private location: Location
  ) {
    this.initForm();
    this.subscription = this.activatedRoute.params
      .subscribe((params: any) => {
        this.id = params['id'];
        if (params['id']) {
        this.clientService.getClient(this.id)
          .subscribe((data: Client) => {
            this.clientEditForm = this.initForm(data);
          });
        } else {
          this.clientEditForm = this.initForm();
        }
      })
  }

  ngOnInit() {
  }

  initForm(data?: Client) {
    const companyName = data ? data.name : '';
    const contactPerson = data ? data.contactPerson : '';
    const contactEmail = data ? data.contactEmail : '';
    const contactPhone = data ? data.contactPhone : '';
    return this.formGroup.group({
      companyName: [companyName, Validators.required],
      contactPerson: [contactPerson, Validators.required],
      // tslint:disable-next-line:max-line-length
      // tslint:disable-next-line:quotemark
      contactEmail: [contactEmail, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")],
      contactPhone: [contactPhone, Validators.required]
    });
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onCancel() {
    this.router.navigate(['/client']);
  }

  goBack() {
    this.location.back();
  }

  onSubmit() {
      this.clientService.saveClientData(this.clientEditForm.value);
      this.router.navigate(['/client']);
  }

}
