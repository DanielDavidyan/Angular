import {createAction, props} from '@ngrx/store';

export const updateLimit = createAction('[cart] UpdateLimit', props<{productName: string, limit: number}>());


