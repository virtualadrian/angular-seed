import { environment } from './../environments/environment.prod';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// rxjs operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'app/app.reducers';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    RouterModule,
    StoreModule.provideStore(reducer ),
    StoreDevtoolsModule.instrumentStore({
      maxAge: 5
    }),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
