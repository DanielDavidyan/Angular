import {async, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {instance, mock, when} from 'ts-mockito';
import {ProductsEffects} from './products.effects';
import {Observable, of, throwError} from 'rxjs';
import {Action} from '@ngrx/store';
import {provideMockActions} from '@ngrx/effects/testing';
import {ProductsService} from './product-service/products.service';
import {loadProducts, loadProductsFailed, loadProductsSuccess} from './products.actions';
import {hot} from 'jasmine-marbles';
import {Product} from '../models/stock.model';

describe('ProductsEffects', () => {
  let actions$ = new Observable<Action>();
  let effects: ProductsEffects;
  const mockProductService: ProductsService = mock(ProductsService);
  const milkProduct: Product = {name: 'milk', description: 'fresh', image: 'www.milk.com', limit: 10, price: 10};
  const coffeeProduct: Product = {name: 'milk', description: 'fresh', image: 'www.milk.com', limit: 10, price: 10};
  const products: Product[] = [milkProduct, coffeeProduct];
  when(mockProductService.getProducts()).thenReturn(of(products));


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductsEffects,
        {provide: ProductsService, useValue: instance(mockProductService)},
        [provideMockActions(() => actions$)],
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  beforeEach(() => {
    effects = TestBed.inject(ProductsEffects);
  });

  it('should create', () => {
    expect(effects).toBeTruthy();
  });

  it('should return loadProducts() when ngrxOnInitEffects run', async(() => {
    effects.ngrxOnInitEffects();
    expect(effects.ngrxOnInitEffects()).toEqual(loadProducts());
  }));

  it('should success to load products', async(() => {
    actions$ = hot('--a|', {a: loadProducts});
    const expected$ = hot('--b|', {b: loadProductsSuccess({products})});
    expect(effects.loadProducts$).toBeObservable(expected$);
  }));

  it('should failed to load products', async(() => {
    when(mockProductService.getProducts()).thenReturn(throwError('error'));
    actions$ = hot('a', {a: loadProducts()});
    const expected$ = hot('b', {b: loadProductsFailed()});
    expect(effects.loadProducts$).toBeObservable(expected$);
  }));
});
