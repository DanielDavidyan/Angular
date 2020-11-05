import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Product} from '../../models/stock.model';
import {ProductsService} from '../../products/product-service/products.service';
import {CartProductsService} from '../cart-service/cart-products.service';

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
    this.getTotalPrice();
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

  checkout(): void {
    const productsInCart: string[] = Object.keys(this.cartProductsService.getCartProducts().getValue());
    productsInCart.map(cartProduct => {
      this.productsService.updateLimit(cartProduct, this.cartProductsService.getCartProducts().getValue()[cartProduct]);
    });
    this.cartProductsService.getCartProducts().next({});
  }
}
