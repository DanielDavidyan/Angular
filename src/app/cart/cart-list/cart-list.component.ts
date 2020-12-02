import {Component, OnInit} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Product} from '../../models/stock.model';
import {ProductsService} from '../../products/product-service/products.service';
import {select, Store} from '@ngrx/store';
import {CartProductState, getCart} from '../cart.reducer';
import {getProducts, ProductsState} from '../../products/products.reducer';
import {updateLimit} from '../../products/products.actions';
import {checkout} from '../cart.actions';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.less']
})
export class CartListComponent implements OnInit {
  cartProducts: Observable<Record<string, number>>;
  products: Observable<Product[]>;
  totalPrice: Observable<number>;

  constructor(private productsService: ProductsService,
              private store: Store<CartProductState | ProductsState>) {
  }

  ngOnInit(): void {
    this.cartProducts = this.store.pipe(select(getCart));
    this.products = this.store.pipe(select(getProducts));
    this.getTotalPrice();
  }

  checkout(): void {
    this.cartProducts.subscribe(cartProducts => {
      Object.keys(cartProducts).map(cartProduct => {
        this.store.dispatch(updateLimit({productName: cartProduct, limit: cartProducts[cartProduct]}));
      });
    });
    this.store.dispatch(checkout());
  }

  private getTotalPrice(): void {
    this.totalPrice = combineLatest([this.cartProducts, this.products]).pipe(
      map(([cart, stock]) => {
        const productsInCart: string[] = Object.keys(cart);
        return productsInCart.reduce((total: number, product: string) =>
          total + (cart[product] * stock.find((prod: Product) => prod.name === product).price)
          , 0);
      }));
  }
}
