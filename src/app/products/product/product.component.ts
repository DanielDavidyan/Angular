import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/stock.model';
import {Input} from '@angular/core';
import {ProductsService} from '../product-service/products.service';
import {addProduct, removeProduct} from '../../cart/cart.actions';
import {select, Store} from '@ngrx/store';
import {CartProductState, isExistInCart} from '../../cart/cart.reducer';
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
              private store: Store<CartProductState>) {
  }

  ngOnInit(): void {
    this.exist$ = this.store.pipe(select(isExistInCart, {cartProductName: this.product.name}));
  }

  addProduct(product: Product): void {
    this.store.dispatch(addProduct({product}));
  }

  removeProduct(cartProductName: string): void {
    this.store.dispatch(removeProduct({cartProductName}));
  }
}
