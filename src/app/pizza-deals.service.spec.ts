/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PizzaDealsService } from './pizza-deals.service';

describe('PizzaDealsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaDealsService]
    });
  });

  it('should ...', inject([PizzaDealsService], (service: PizzaDealsService) => {
    expect(service).toBeTruthy();
  }));
});
