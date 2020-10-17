import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartComponent} from './cart/cart.component';
import {CartListComponent} from './cart-list/cart-list.component';
import {CartProductComponent} from './cart-product/cart-product.component';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {ProductsService} from '../products-module/product-service/products.service';
import {CartProductsService} from './cart-service/cart-products.service';


@NgModule({
  declarations: [
    CartComponent,
    CartListComponent,
    CartProductComponent,
  ],
  providers: [
    ProductsService,
    CartProductsService],
  imports: [
    RouterModule,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    CartComponent,
    CartListComponent,
    CartProductComponent,
  ]
})
export class CartModule { }
