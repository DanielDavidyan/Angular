import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {AppRoutingModule} from './app-routing.module';
import {ProductsModule} from './products/product.module';
import {CartModule} from './cart/cart.module';
import {ProductsService} from './products/product-service/products.service';
import {CartProductsService} from './cart/cart-service/cart-products.service';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSliderModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    AppRoutingModule,
    ProductsModule,
    CartModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [
    ProductsService,
    CartProductsService
  ],
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


