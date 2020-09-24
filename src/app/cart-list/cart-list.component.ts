import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../product/products.service';
import {CartProductsService} from '../cart/cart-products.service';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Product} from '../models/stock.model';

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
              private cartProductsService: CartProductsService) {
  }

  ngOnInit(): void {
    this.cartProducts = this.cartProductsService.getCartProducts();
    this.products = this.productsService.getProducts();
    this.getTotalPrice(this.cartProducts);
  }

   getTotalPrice(cartProducts: BehaviorSubject<Record<string, number>>): void {
    this.totalPrice = combineLatest([cartProducts, this.products]).pipe(map(([cart, stock]) => {
      const productsInCart: string[] = Object.keys(cart);
      return productsInCart.reduce((total, product) =>
        total + (cart[product] * stock.find((prod) => prod.name === product).price)
        , 0);
    }));
  }

   checkout(): void {
    const productsInCart = Object.keys(this.cartProductsService.getCartProducts().getValue());
    productsInCart.map(cartProducts => {
      this.productsService.updateLimit(cartProducts, this.cartProductsService.getCartProducts().getValue()[cartProducts]);
    });
    this.cartProductsService.getCartProducts().next({});
  }
}
