import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CartProductComponent} from './cart-product.component';
import {CartProductsService} from '../cart-service/cart-products.service';
import {ProductsService} from '../../products/product-service/products.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {anything, instance, mock, verify, when} from 'ts-mockito';
import {Product} from '../../models/stock.model';
import {BehaviorSubject, of} from 'rxjs';


describe('CartProductComponent', () => {
  let component: CartProductComponent;
  let fixture: ComponentFixture<CartProductComponent>;
  const MockCartProductsService: CartProductsService = mock(CartProductsService);
  const MockProductsService: ProductsService = mock(ProductsService);
  const product: Product = {name: 'milk', description: 'fresh', image: 'www.milk.com', limit: 10, price: 10};
  const cartProducts: Record<string, number> = {milk: 5};
  when(MockProductsService.getProduct(anything())).thenReturn(of(product));
  when(MockCartProductsService.getCartProducts()).thenReturn(new BehaviorSubject(cartProducts));
  when(MockCartProductsService.removeProduct('milk')).thenReturn();


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartProductComponent],
      providers: [
        {provide: CartProductsService, useValue: instance(MockCartProductsService)},
        {provide: ProductsService, useValue: instance(MockProductsService)}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(CartProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.cartProductName = product.name;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('remove product', () => {
      component.removeProduct(product.name);
      verify(MockCartProductsService.removeProduct(product.name)).called();
  });

  it('updateProductAmount product', () => {
    component.updateProductAmount(5);
    verify(MockCartProductsService.updateProductAmount(product.name, 5)).called();
  });
});
