import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { OfferService } from '../../../services/offer.service';
import { getRouter } from '../../app.reducers';
 
@Injectable()
export class getOfferEffect {
 
  loadOffer$ = createEffect(():any => {
   return  this.actions$.pipe(

        ofType('[Offer] Get offer'),
        mergeMap(() => this.offerService.getOffers()
          .pipe(
            map(oferta => ({ type: '[Offer] Get loadedOfferSuccess', payload: oferta })),
            catchError(() => EMPTY)
          ))
        )});
 
  constructor(
    private actions$: Actions,
    private offerService: OfferService
  ) {}
}


