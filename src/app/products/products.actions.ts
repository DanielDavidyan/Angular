import {createAction, props} from '@ngrx/store';
import {Product} from '../models/stock.model';

enum ProductsActions {
  UPDATE_LIMIT = '[cart] Update limit',
  LOAD_PRODUCTS = '[products] Load products',
  LOAD_PRODUCTS_SUCCESSFULLY = '[products] Load products successfully'
}

export const updateLimit = createAction(ProductsActions.UPDATE_LIMIT, props<{productName: string, limit: number}>());
export const loadProducts = createAction(ProductsActions.LOAD_PRODUCTS);
export const loadProductsSuccess = createAction(ProductsActions.LOAD_PRODUCTS_SUCCESSFULLY, props<{products: Product[]}>());
