import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './products-module/product-list/product-list.component';
import {CartListComponent} from './cart-module/cart-list/cart-list.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'cart', component: CartListComponent},
  // {path: 'cart', loadChildren: () => import('./cart-module/cart.module').then(m => m.CartModule)},
  {path: 'products/:productId', loadChildren: () => import('./products-module/product.module').then(m => m.ProductsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
