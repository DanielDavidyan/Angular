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
import {ProductsModule} from './products-module/product.module';
import {CartModule} from './cart-module/cart.module';


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
    CartModule
  ],
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


