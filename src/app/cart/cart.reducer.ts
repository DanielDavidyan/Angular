import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {addProduct, checkout, removeProduct, updateProductAmount} from './cart.actions';

export const cartToken = 'cartToken';

export interface CartProductState {
  cart: Record<string, number>;
}

export const CartProductsInitialState: CartProductState = {
  cart: {}
};

export const cartReducer = createReducer(
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
    cart: remove({...state.cart}, cartProductName)
  })),
  on(updateProductAmount, (state, {cartProductName, amount}) => ({
    ...state,
    cart: {
      ...state.cart,
      [cartProductName]: amount
    }
  })),
  on(checkout, (state) => ({
    ...state,
    cart: {}
  }))
);

function remove(cart, cartProductName): Record<string, number> {
  delete cart[cartProductName];
  return {...cart};
}

export const getCartState = createFeatureSelector<CartProductState>(cartToken);
export const getCart = createSelector(getCartState,
  state => state.cart);
export const isExistInCart = createSelector(getCart,
  (cart, {cartProductName}: { cartProductName: string }) => {
    return !!cart[cartProductName];
  });


