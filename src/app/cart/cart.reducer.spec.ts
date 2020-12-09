import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CartListComponent} from './cart-list.component';
import {productsToken} from '../../products/products.reducer';
import {cartToken} from '../cart.reducer';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {instance, mock} from 'ts-mockito';
import {ProductsService} from '../../products/product-service/products.service';
import {checkout} from '../cart.actions';
import {Product} from '../../models/stock.model';
import {updateLimit} from '../../products/products.actions';
import Spy = jasmine.Spy;

describe('CartReducer', () => {
  let component: CartListComponent;
  let fixture: ComponentFixture<CartListComponent>;
  const mockProductService: ProductsService = mock(ProductsService);
  let store: MockStore<any>;
  const milk = 'milk';
  const milkProduct: Product = {name: milk, description: 'fresh', image: 'www.milk.com', limit: 10, price: 10};
  const cart: Record<string, number> = {milk: 5};
  const products: Product[] = [milkProduct];
  const initialState = {[cartToken]: {cart}, [productsToken]: {products}};
  let storeDispatch: Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartListComponent
      ],
      providers: [
        provideMockStore({initialState}),
        {provide: ProductsService, useValue: instance(mockProductService)}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
    storeDispatch = spyOn(store, 'dispatch');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checkout', async(() => {
    component.checkout();
    expect(storeDispatch).toHaveBeenCalledWith(updateLimit({productName: milk, limit: cart[milk]}));
    expect(storeDispatch).toHaveBeenCalledWith(checkout());
  }));
});




