import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartListComponent} from './cart-list/cart-list.component';
import {StoreModule} from '@ngrx/store';
import {cartReducer} from './cart.reducer';

const routes: Routes = [
  {path: '', component: CartListComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CartRoutingModule {
}



