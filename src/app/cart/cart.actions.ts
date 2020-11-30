import {createAction, props} from '@ngrx/store';
import {Product} from '../models/stock.model';

enum CartActions{
  ADD_PRODUCT = '[cart] AddProduct',
  REMOVE_PRODUCT = '[cart] RemoveProduct',
  UPDATE_PRODUCT_AMOUNT = '[cart] UpdateProductAmount',
  CHECKOUT = '[cart] CheckOut'
}

export const addProduct = createAction(CartActions.ADD_PRODUCT, props<{product: Product}>());
export const removeProduct = createAction(CartActions.REMOVE_PRODUCT, props<{cartProductName: string}>());
export const updateProductAmount = createAction(CartActions.UPDATE_PRODUCT_AMOUNT, props<{cartProductName: string, amount: number}>());
export const checkout = createAction(CartActions.CHECKOUT);
