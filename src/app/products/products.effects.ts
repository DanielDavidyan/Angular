import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType, OnInitEffects} from '@ngrx/effects';
import {map, catchError, switchMap} from 'rxjs/operators';
import {ProductsService} from './product-service/products.service';
import {loadProducts, loadProductsSuccess, loadProductsFailed} from './products.actions';
import {Action} from '@ngrx/store';

@Injectable()

export class ProductsEffects implements OnInitEffects {
  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(loadProducts),
    switchMap(() => this.productsService.getProducts()
      .pipe(
        map(products => loadProductsSuccess({products})),
        catchError(() => loadProductsFailed)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}

  ngrxOnInitEffects(): Action {
    return loadProducts();
  }
}
