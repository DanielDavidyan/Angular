import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import {map, catchError, switchMap} from 'rxjs/operators';
import {ProductsService} from './product-service/products.service';
import {loadProducts, loadProductsSuccess} from './products.actions';

@Injectable()
export class ProductsEffects {

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(loadProducts),
    switchMap(() => this.productsService.getProducts()
      .pipe(
        map(products => loadProductsSuccess({products})),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}
