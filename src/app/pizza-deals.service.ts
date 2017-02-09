import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { PizzaDeal } from './pizza-deal'

@Injectable()
export class PizzaDealsService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getPizzaDeals (): Promise<PizzaDeal[]> {
    return this.http.get('http://localhost:3000/api/pizza-deals')
                    .toPromise()
                    .then(response => response.json() as PizzaDeal[])
                    .catch(this.handleError)
  }

  addToCart (deal: PizzaDeal) {
    const jsonDeal = JSON.stringify({ pizzaDealId: deal.id })
    const options = {headers: this.headers}

    return this.http.post('http://localhost:3000/api/add-to-cart', jsonDeal, options)
                    .toPromise()
                    .then(response => response.json())
                    .catch(this.handleError)
  }

  getCart (): Promise<PizzaDeal[]> {
    return this.http.get('http://localhost:3000/api/cart')
                    .toPromise()
                    .then(response => response.json() as PizzaDeal[])
                    .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
