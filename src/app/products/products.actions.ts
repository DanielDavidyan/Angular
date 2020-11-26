import {createAction, props} from '@ngrx/store';
import {Product} from '../models/stock.model';

export const updateLimit = createAction('[cart] UpdateLimit', props<{productName: string, limit: number}>());
export const loadProducts = createAction('[products] Get Products');
export const loadProductsSuccess = createAction('[products] Load Products Success', props<{products: Product[]}>());



