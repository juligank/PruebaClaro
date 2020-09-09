import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './app.reducers';
import { getOfferEffect } from './reminder/effects/getOfferEfect';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    StoreModule.forRoot(appReducers),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Calendar',
      maxAge: 25,
    }),
    EffectsModule.forFeature([getOfferEffect]),
    HttpClientModule
//    EffectsModule.forRoot([getOfferEffect]),
  ],
  declarations: []
})
export class ReduxModule { }