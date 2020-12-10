import {createAction, props} from '@ngrx/store';
import {Product} from '../models/stock.model';

enum ProductsActions {
  UPDATE_LIMIT = '[cart] Update limit Product In The Stock',
  LOAD_PRODUCTS = '[products] Load Products',
  LOAD_PRODUCTS_SUCCESSFULLY = '[products] Load Products Successfully',
  LOAD_PRODUCTS_FAILED = '[products] Load Products Failed'
}

export const updateLimit = createAction(ProductsActions.UPDATE_LIMIT, props<{productName: string, limit: number}>());
export const loadProducts = createAction(ProductsActions.LOAD_PRODUCTS);
export const loadProductsSuccess = createAction(ProductsActions.LOAD_PRODUCTS_SUCCESSFULLY, props<{products: Product[]}>());
export const loadProductsFailed = createAction(ProductsActions.LOAD_PRODUCTS_FAILED);


