import {createAction, props} from '@ngrx/store';
import {Product} from '../models/stock.model';

enum CartActions{
  ADD_PRODUCT = '[cart] Add Product to Cart',
  REMOVE_PRODUCT = '[cart] Remove Product from Cart',
  UPDATE_PRODUCT_AMOUNT = '[cart] Update Product Amount',
  CHECKOUT = '[cart] Checkout'
}

export const addProduct = createAction(CartActions.ADD_PRODUCT, props<{product: Product}>());
export const removeProduct = createAction(CartActions.REMOVE_PRODUCT, props<{cartProductName: string}>());
export const updateProductAmount = createAction(CartActions.UPDATE_PRODUCT_AMOUNT, props<{cartProductName: string, amount: number}>());
export const checkout = createAction(CartActions.CHECKOUT);
