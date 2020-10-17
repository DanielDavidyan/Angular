import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from './cart-module/cart/cart.component';
import {ProductDetailsComponent} from './products-module/product-details/product-details.component';
import {ProductListComponent} from './products-module/product-list/product-list.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'cart', component: CartComponent},
  {path: 'products/:productId', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
