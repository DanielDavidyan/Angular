import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {IndexComponent} from './index/index.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {ProductComponent} from './product/product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {CartComponent} from './cart/cart.component';
import {CartListComponent} from './cart-list/cart-list.component';
import {CartProductComponent} from './cart-product/cart-product.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {path: '', component: IndexComponent},
            {path: 'cart', component: CartComponent},
            {path: 'products/:productId', component: ProductDetailsComponent},
        ]),
        MatFormFieldModule,
        MatSelectModule,
        MatSliderModule,
        BrowserAnimationsModule,
        FormsModule,
        MatInputModule
    ],
  declarations: [
    AppComponent,
    IndexComponent,
    NavBarComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    CartListComponent,
    CartProductComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


