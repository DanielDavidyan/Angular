import * as fromReducer from './cart.reducer';
import {addProduct, checkout, removeProduct, updateProductAmount} from './cart.actions';
import {Product} from '../models/stock.model';

describe('CartReducer', () => {
  let cart: Record<string, number>;

  it('addProduct', () => {
    cart = {milk: 1};
    const milkProduct: Product = {name: 'milk', description: 'fresh', image: 'www.milk.com', limit: 10, price: 10};
    const CartProductsInitialState = {cart: {}};
    const newState = {cart};
    const action = addProduct({product: milkProduct});
    const state = fromReducer.cartReducer(CartProductsInitialState, action);
    expect(state).toEqual(newState);
  });

  it('should remove product from the cart', () => {
    cart = {milk: 1};
    const CartProductsInitialState = {cart};
    const newState = {cart: {}};
    const action = removeProduct({cartProductName: 'milk'});
    const state = fromReducer.cartReducer(CartProductsInitialState, action);
    expect(state).toEqual(newState);
  });

  it('should update the amount of the product in the cart', () => {
    const cartBeforeUpdate = {milk: 1};
    const cartAfterUpdate = {milk: 5};
    const CartProductsInitialState = {cart: cartBeforeUpdate};
    const newState = {cart: cartAfterUpdate};
    const action = updateProductAmount({cartProductName: 'milk', amount: 5});
    const state = fromReducer.cartReducer(CartProductsInitialState, action);
    expect(state).toEqual(newState);
  });

  it('should reset the cart', () => {
    cart = {milk: 5};
    const CartProductsInitialState = {cart};
    const newState = {cart: {}};
    const action = checkout();
    const state = fromReducer.cartReducer(CartProductsInitialState, action);
    expect(state).toEqual(newState);
  });
});
