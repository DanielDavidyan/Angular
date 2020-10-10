import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartComponent} from './cart/cart.component';
import {CartListComponent} from './cart-list/cart-list.component';
import {CartProductComponent} from './cart-product/cart-product.component';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    CartComponent,
    CartListComponent,
    CartProductComponent,
  ],
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
