import {async, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {instance, mock} from 'ts-mockito';
import {ProductsEffects} from './products.effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {provideMockActions} from '@ngrx/effects/testing';
import {ProductsService} from './product-service/products.service';
import {loadProducts} from './products.actions';

describe('CartComponent', () => {
  const actions$ = new Observable<Action>();
  let effects: ProductsEffects;
  const mockProductService: ProductsService = mock(ProductsService);

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
    effects.ngrxOnInitEffects();
    expect(effects.ngrxOnInitEffects()).toEqual(loadProducts());
  }));

  it('should failed to load products', async(() => {
    expect(1).toEqual(2);
  }));
});




