import {Component} from '@angular/core';
import {Product} from '../../models/stock.model';
import {Input} from '@angular/core';
import {CartProductsService} from '../../cart/cart-service/cart-products.service';
import {ProductsService} from '../product-service/products.service';
import {addProduct, removeProduct} from '../../cart/cart.actions';
import {select, Store} from '@ngrx/store';
import {CartProductState, getCart} from '../../cart/cart.reducer';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent {
  @Input() product: Product;

  constructor(private productsService: ProductsService,
              private cartProductsService: CartProductsService,
              private store: Store<CartProductState>) {
  }

  addProduct(product: Product): void {
    this.store.dispatch(addProduct({product}));
  }

  removeProduct(cartProductName: string): void {
    this.store.dispatch(removeProduct({cartProductName}));
  }

  isExistInCart(cartProductName: string): boolean {
    return false;
    // this.store.pipe(select(getCart)).subscribe;
  }
}
