import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { reminderActions } from '../redux/reminder/actions';
import * as fromReminderReducer from '../redux/reminder/reducers';
import { Global } from '../redux/reminder/models/global.model';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  offer: Global[];

  constructor(
    private store: Store<fromReminderReducer.State>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new reminderActions.GetOffer());

    this.store.pipe(select(fromReminderReducer.selectReminder)).subscribe(res => {
      if (res && res.offer) {
        this.offer = res.offer;
      }
    });
  }

}
