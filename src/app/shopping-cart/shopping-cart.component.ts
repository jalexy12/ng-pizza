import { Component, OnInit } from '@angular/core';

import { PizzaDealsService } from '../pizza-deals.service'
import { PizzaDeal } from '../pizza-deal'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  providers: [ PizzaDealsService ]
})
export class ShoppingCartComponent implements OnInit {
  cart: PizzaDeal[] = []
  total = 0
  itemNoun = 'item'

  constructor(private dealsService: PizzaDealsService) { }

  ngOnInit() {
    this.getCartPls()
  }

  getCartPls () {
    const iPromiseCart = this.dealsService.getCart()
    iPromiseCart.then(cart => {
      this.cart = cart

      this.total = 0
      this.cart.forEach(item => {
        this.total += item.basePrice + item.ingredients.reduce((sum, ingr) => sum + ingr.price, 0)
      })

      if (this.cart.length > 1) {
        this.itemNoun = 'items'
      }
    })
  }

  addItem (deal: PizzaDeal) {
    this.cart.push(deal)
    this.total += deal.basePrice + deal.ingredients.reduce((sum, ingr) => sum + ingr.price, 0)

    if (this.cart.length > 1) {
      this.itemNoun = 'items'
    }
  }
}
