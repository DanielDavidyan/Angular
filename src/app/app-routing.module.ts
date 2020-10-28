import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./products/product.module').then(m => m.ProductsModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
  }
];

// const routes: Routes = [
//   {path: '', component: ProductListComponent},
//   {path: 'cart', component: CartListComponent},
//   // {path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)},
//   {path: 'products/:productId', loadChildren: () => import('./products/product.module').then(m => m.ProductsModule)}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


