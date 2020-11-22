import {createAction, props} from '@ngrx/store';

export const updateLimit = createAction('[cart] UpdateProductAmount', props<{productName: string, limit: number}>());

