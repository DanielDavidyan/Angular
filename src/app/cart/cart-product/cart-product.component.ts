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
export class CartProductComponent implements OnInit, AfterViewInit {
  @Input() cartProductName: string;
  product: Product;
  options: number[];
  cartProducts: Observable<Record<string, number>>;

  constructor(private productsService: ProductsService,
              private store: Store<CartProductState | ProductsState>) {
  }

  ngAfterViewInit(): void {
  }


  ngOnInit(): void {
  this.store.select(getProduct, {productName: this.cartProductName}).subscribe(prod => this.product = prod);
  this.options = this.createArray(this.product.limit);

    // this.productsService.getProduct(this.cartProductName).subscribe(product => this.product = product);
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
