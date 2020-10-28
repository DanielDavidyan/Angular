import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartListComponent} from './cart-list/cart-list.component';
import {CartProductComponent} from './cart-product/cart-product.component';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {CartRoutingModule} from './cart-module.routing';

@NgModule({
  declarations: [
    CartListComponent,
    CartProductComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    CartRoutingModule
  ],
  exports: [
    CartListComponent,
    CartProductComponent,
  ]
})

export class CartModule { }
