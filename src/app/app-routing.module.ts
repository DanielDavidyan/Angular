import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {CartComponent} from './cart-module/cart/cart.component';
import {ProductDetailsComponent} from './products-module/product-details/product-details.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'cart', component: CartComponent},
  {path: 'products/:productId', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
