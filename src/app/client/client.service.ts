import { Client } from 'app/client/client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClientService {

  // tslint:disable-next-line:no-unused-expression
  private clientData: Client[] = [
    {id: '1', name: 'Infosys', contactEmail: 'infy@gmail.co', contactPhone: '992567', contactPerson: 'arjun' },
    {id: '2', name: 'TCS', contactEmail: 'tcs@gmail.co', contactPhone: '992567', contactPerson: 'abhishek' },
    {id: '3', name: 'Cognizant', contactEmail: 'cog@gmail.co', contactPhone: '992567', contactPerson: 'praveen' },
    {id: '4', name: 'xyz', contactEmail: 'xyz@gmail.co', contactPhone: '992567', contactPerson: 'toptal' },
    {id: '5', name: 'Aviabird', contactEmail: 'avb@gmail.co', contactPhone: '992567', contactPerson: 'django' },
    {id: '6', name: 'TM', contactEmail: 'Tm@gmail.co', contactPhone: '992567', contactPerson: 'sake' },
  ]

  constructor() { }

  getClients() {
    return Observable.of(this.clientData);
  }

  getClient(id: string): Observable<Client> {
    let clientdata: Client[];
    clientdata = this.clientData.filter((data) => {
      return data.id === id
    })
    return Observable.of(clientdata[0]);
  }


  saveClientData(addData: Client) {
    const length = this.clientData.length;
    addData.id = String(length + 1);
    this.clientData.push(addData);

    return Observable.of(addData);
  }

}
