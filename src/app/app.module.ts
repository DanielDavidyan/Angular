import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartProductComponent } from './cart-product/cart-product.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavBarComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    CartListComponent,
    CartProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
