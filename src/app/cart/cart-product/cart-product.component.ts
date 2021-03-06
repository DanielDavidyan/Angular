import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/stock.model';
import {ProductsService} from '../../products/product-service/products.service';
import {select, Store} from '@ngrx/store';
import {CartProductState, getCart} from '../cart.reducer';
import {removeProduct, updateProductAmount} from '../cart.actions';
import {getProduct, ProductsState} from '../../products/products.reducer';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.less']
})
export class CartProductComponent implements OnInit {
  @Input() cartProductName: string;
  product: Product;
  options: number[];
  cartProducts: Observable<Record<string, number>>;

  constructor(private productsService: ProductsService,
              private store: Store<CartProductState | ProductsState>) {
  }

  ngOnInit(): void {
    this.store.pipe(select(getProduct, {productName: this.cartProductName})).subscribe(prod => this.product = prod);
    this.cartProducts = this.store.pipe(select(getCart));
    this.options = this.createArray(this.product.limit);
  }

  removeProduct(cartProductName: string): void {
    this.store.dispatch(removeProduct({cartProductName}));
  }

  updateProductAmount(amount: number): void {
    this.store.dispatch(updateProductAmount({cartProductName: this.cartProductName, amount}));
  }

  private createArray(size: number): number[] {
    return Array.from({length: size}, (_, i) => i + 1);
  }
}
