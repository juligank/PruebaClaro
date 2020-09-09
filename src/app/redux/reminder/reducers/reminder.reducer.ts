import { reminderActions } from '../actions';
import { Reminder } from '../models/reminder.model';
import { Global } from '../models/global.model';


export interface ReminderState {
    offer: Global[];
    error?: any;
}

const estadoInicial: ReminderState = {
    offer: []
};

export function ReminderReducer(state = estadoInicial, action: reminderActions.ReminderActionsUnion): ReminderState {
    switch (action.type) {
        case reminderActions.ReminderActionTypes.getOffer:
            return {
                ...state,
            };
        case reminderActions.ReminderActionTypes.loadedOffers:
            return {
                ...state, offer: [...action.payload]
            };
        default:
            return state;

    }
}
