import { Action } from '@ngrx/store';
import { Reminder } from '../models/reminder.model';
import { Global } from '../models/global.model';


export enum ReminderActionTypes {
    getOffer = '[Offer] Get offer',
    loadedOffers = '[Offer] Get loadedOfferSuccess',
}



export class GetOffer implements Action {
    readonly type = ReminderActionTypes.getOffer;
    constructor() { }
}


export class LoadedOffersSuccess implements Action {
    readonly type = ReminderActionTypes.loadedOffers;
    constructor(public payload: Global[]) { }
}

export type ReminderActionsUnion = GetOffer | LoadedOffersSuccess;



