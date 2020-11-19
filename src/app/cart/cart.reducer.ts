import {Action, createAction, createFeatureSelector, createReducer, createSelector, on, props} from '@ngrx/store';
import {addProduct, removeProduct, updateProductAmount} from './cart.actions';
import {BehaviorSubject} from 'rxjs';
import {state} from '@angular/animations';

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
  console.log('remove work!!!!!!');
  return newCart;
}

export const getCartState = createFeatureSelector<CartProductState>(cartToken);
export const getCart = createSelector(getCartState, state => state.cart);
// export const isExistInCart = createSelector(getCartStawte, props => state.cart);

// export const updat2eProductAmount = createAction('[cart] UpdateProductAmount', props<{cartProductName: string, amount: number}>());



export function cartReducer(state, action): CartProductState {
  return _cartReducer(state, action);
}

