import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './product/product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {RouterModule} from '@angular/router';
import {ProductsService} from './product-service/products.service';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  providers: [ProductsService],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent
  ]
})
export class ProductsModule {
}
