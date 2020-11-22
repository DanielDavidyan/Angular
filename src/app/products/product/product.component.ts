import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/stock.model';
import {Input} from '@angular/core';
import {CartProductsService} from '../../cart/cart-service/cart-products.service';
import {ProductsService} from '../product-service/products.service';
import {addProduct, removeProduct} from '../../cart/cart.actions';
import {select, Store} from '@ngrx/store';
import {CartProductState, getCart, isExistInCart} from '../../cart/cart.reducer';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  exist$: Observable<boolean>;

  constructor(private productsService: ProductsService,
              private cartProductsService: CartProductsService,
              private store: Store<CartProductState>) {
  }

  ngOnInit(): void {
    this.exist$ = this.store.select(isExistInCart, {cartProductName: this.product.name});
  }

  addProduct(product: Product): void {
    this.store.dispatch(addProduct({product}));
  }

  removeProduct(cartProductName: string): void {
    this.store.dispatch(removeProduct({cartProductName}));
  }

  // isExistInCart(cartProductName: string): Observable<boolean> {
  //   console.log('jhjh');
  //   return this.store.select(isExistInCart, {cartProductName});
  // }


  isProductHasLimit(): boolean {
    return this.product.limit && this.product.limit > 0;
  }
}
