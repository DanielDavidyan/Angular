import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './product/product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {RouterModule} from '@angular/router';
import {ProductModuleRouting} from './product-module.routing';
import {StoreModule} from '@ngrx/store';
import {productsReducer, productsToken} from './products.reducer';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ProductModuleRouting,
    StoreModule.forFeature(productsToken, productsReducer)
  ],
  exports: [
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent
  ]
})
export class ProductsModule {
}
