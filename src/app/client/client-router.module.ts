import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

const ROUTES: Routes = [
  { path: '', component: ClientListComponent },
  { path: 'edit/:id', component: ClientEditComponent },
  { path: 'view/:id', component: ClientDetailComponent },
  { path: 'new', component: ClientEditComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ClientRouterModule { }
