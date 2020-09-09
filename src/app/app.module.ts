import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfferComponent } from './offer/offer.component';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { PricesComponent } from './prices/prices.component';
import {ReduxModule} from './redux/redux.module';
import { EffectsModule } from '@ngrx/effects';
import { getOfferEffect } from './redux/reminder/effects/getOfferEfect';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import {ReminderReducer} from './redux/reminder/reducers/reminder.reducer';


@NgModule({
  declarations: [
    AppComponent,
    OfferComponent,
    CharacteristicsComponent,
    PricesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReduxModule,
    EffectsModule.forRoot([getOfferEffect]),
    HttpClientModule,
    StoreModule.forFeature('REMINDER', ReminderReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
