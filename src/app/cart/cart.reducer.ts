import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {addProduct, checkOut, removeProduct, updateProductAmount} from './cart.actions';
import {log} from 'util';

export const cartToken = 'cart';

export interface CartProductState {
  cart: Record<string, number>;
}

export const CartProductsInitialState: CartProductState = {
  cart: {}
};

export const _cartReducer = createReducer(
  CartProductsInitialState,
  on(addProduct, (state, {product}) => ({
    ...state,
    cart: {
      ...state.cart,
      [product.name]: 1
    }
  })),
  on(removeProduct, (state, {cartProductName}) => ({
    ...state,
    cart: remove(state.cart, cartProductName)
  })),
  on(updateProductAmount, (state, {cartProductName, amount}) => ({
    ...state,
    cart: {
      ...state.cart,
      [cartProductName]: amount
    }
  })),
  on(checkOut, (state) => ({
    ...state,
    cart: {}
  }))
);

function remove(cart, cartProductName): Record<string, number> {
  const newCart = {...cart};
  delete newCart[cartProductName];
  return newCart;
}

export const getCartState = createFeatureSelector<CartProductState>(cartToken);
export const getCart = createSelector(getCartState,
    state => state.cart);
export const isExistInCart = createSelector(getCart,
    (cart, {cartProductName}: {cartProductName: string}) => {
      return !!cart[cartProductName];
    });
    // (state, props: {cartProductName: string}) => !!state.cart[props.cartProductName]);

export function cartReducer(state, action): CartProductState {
  return _cartReducer(state, action);
}
