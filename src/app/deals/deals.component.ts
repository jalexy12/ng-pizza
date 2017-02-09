import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { PizzaDealsService } from '../pizza-deals.service'
import { IngredientClass } from '../ingredient'
import { PizzaDeal } from '../pizza-deal'


@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css'],
  providers: [ PizzaDealsService ]
})
export class DealsComponent implements OnInit {

  pizzaDeals: PizzaDeal[] = []

  @Output() onOrder = new EventEmitter<PizzaDeal>()

  constructor (private dealsService: PizzaDealsService) { }

  ngOnInit(): void {
    this.getPizzaDealsPls()
  }

  getPizzaDealsPls () {
    const iPromisePizzaDeals = this.dealsService.getPizzaDeals()
    iPromisePizzaDeals.then(deals => this.pizzaDeals = deals)
  }

  totalPrice (deal: PizzaDeal) {
    return deal.basePrice + deal.ingredients.reduce((sum, ingr) => sum + ingr.price, 0)
  }

  makeOrder (deal: PizzaDeal) {
    this.onOrder.emit(deal)
    this.dealsService.addToCart(deal)
  }
}
