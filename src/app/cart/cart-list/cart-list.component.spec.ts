import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CartListComponent} from './cart-list.component';
import {CartProductsService} from '../cart-service/cart-products.service';
import {ProductsService} from '../../products/product-service/products.service';
import {instance, mock, verify, when} from 'ts-mockito';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {Product} from '../../models/stock.model';
import {BehaviorSubject, of} from 'rxjs';

describe('CartListComponent', () => {
  let component: CartListComponent;
  let fixture: ComponentFixture<CartListComponent>;
  const MockCartProductsService: CartProductsService = mock(CartProductsService);
  const MockProductsService: ProductsService = mock(ProductsService);
  const cartProducts: Record<string, number> = {milk: 5};
  const product: Product = {name: 'milk', description: 'fresh', image: 'www.milk.com', limit: 10, price: 10};
  when(MockProductsService.getProducts()).thenReturn(of([product]));
  when(MockCartProductsService.getCartProducts()).thenReturn(new BehaviorSubject(cartProducts));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartListComponent],
      providers: [
        {provide: CartProductsService, useValue: instance(MockCartProductsService)},
        {provide: ProductsService, useValue: instance(MockProductsService)}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checkout', () => {
    component.checkout();
    verify(MockCartProductsService.getCartProducts()).called();
    verify(MockProductsService.updateLimit(product.name, cartProducts[product.name])).called();
  });
});

