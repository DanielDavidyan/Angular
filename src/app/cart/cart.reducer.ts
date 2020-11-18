import {Action, createAction, createReducer, createSelector, on} from '@ngrx/store';
// import { getCartProducts, addProduct, removeProduct, isExistInCart, updateProductAmount } from './cart.actions';
import {addProduct, removeProduct, updateProductAmount} from './cart.actions';

export const cartToken = 'cart';
export interface CartProductState {
  cart: Record<string, number>;
}
export const CartProductsInitialState: CartProductState = {
  cart: {
  }
};


export const _cartReducer = createReducer(
  CartProductsInitialState,
  on(addProduct, (state , {product}) => ({
    ...state,
    cart: {
      ...state.cart,
      [product.name]: 1
    }
  })),
  on(removeProduct, (state , {cartProductName}) => ({
    ...state,
    cart: remove(state.cart, cartProductName)
  })),
  on(updateProductAmount, (state , {cartProductName, amount}) => ({
    ...state,
    cart: {
      ...state.cart,
      [cartProductName]: amount
    }
  }))
);

function remove(cart, cartProductName): Record<string, number> {
  const newCart = {...cart};
  delete newCart[cartProductName];
  return newCart;
}


export function cartReducer(state, action): CartProductState {
  return _cartReducer(state, action);
}

