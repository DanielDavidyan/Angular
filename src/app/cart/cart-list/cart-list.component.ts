import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
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
  cartProducts: BehaviorSubject<Record<string, number>>;
  products: Observable<Product[]>;
  totalPrice: Observable<number>;

  constructor(private productsService: ProductsService,
              private store: Store<CartProductState | ProductsState>) {
  }

  ngOnInit(): void {
    this.cartProducts = new BehaviorSubject<Record<string, number>>({});
    this.store.select(getCart).subscribe(cart => this.cartProducts.next(cart));
    // this.cartProducts = this.cartProductsService.getCartProducts();
    this.products = this.store.select(getProducts);
    this.getTotalPrice();
  }

  checkout(): void {
    const productsInCart: string[] = Object.keys(this.cartProducts.getValue());
    productsInCart.map(cartProduct => {
      this.store.dispatch(updateLimit({productName: cartProduct, limit: this.cartProducts.getValue()[cartProduct]}));
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
