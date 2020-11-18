import {createAction, props} from '@ngrx/store';
import {Product} from '../models/stock.model';

export const addProduct = createAction('[cart] AddProduct', props<{product: Product}>());
export const removeProduct = createAction('[cart] RemoveProduct', props<{cartProductName: string}>());
// export const isExistInCart = createAction('[cart] IsExistInCart');
export const updateProductAmount = createAction('[cart] UpdateProductAmount', props<{cartProductName: string, amount: number}>());
