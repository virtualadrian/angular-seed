import { ClientEffects } from './store/effects/effects';
import { EffectsModule } from '@ngrx/effects';
import { ClientReducer } from 'app/client/store/reducers/clients';
import { StoreModule } from '@ngrx/store';
import { ClientService } from './client.service';
import { ClientRouterModule } from './client-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ClientRouterModule,
    FormsModule,
    ReactiveFormsModule,
    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature('clients', ClientReducer),
    /**
    * Effects.forFeature is used to register effects
    * from feature modules. Effects can be loaded
    * eagerly or lazily and will be started immediately.
    *
    * All Effects will only be instantiated once regardless of
    * whether they are registered once or multiple times.
    */
    EffectsModule.forFeature([ClientEffects])
  ],
  declarations: [
    ClientListComponent,
    ClientEditComponent,
    ClientDetailComponent
  ],
  providers: [
    ClientService
  ]
})
export class ClientModule { }
