import { TestBed } from '@angular/core/testing';

import { CartProductsService } from './cart-products.service';

describe('CartProductsService', () => {
  let service: CartProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
