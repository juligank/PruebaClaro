import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(
    private http: HttpClient
  ) { }
  
  uri ='https://api.mocki.io/v1/6a622162/offerts';

  getOffers(): any {
    return this.http.get(`${this.uri}`);
  }

}
