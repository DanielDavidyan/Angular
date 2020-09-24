import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../models/stock.model';


@Injectable({
  providedIn: 'root'
})
export class CartProductsService {
  private readonly cartProducts: BehaviorSubject<Record<string, number>>;

  constructor() {
    this.cartProducts = new BehaviorSubject<Record<string, number>>({});
  }

  getCartProducts(): BehaviorSubject<Record<string, number>> {
    return this.cartProducts;
  }

   addProduct(product: Product): void {
    if (product) {
      if (product.limit > 0 || product.limit === undefined) {
        const cart = this.cartProducts.getValue();
        cart[product.name] = 1;
        this.cartProducts.next(cart);
      }
    }
  }

   removeProduct(cartProductName: string): void {
    const cart = this.cartProducts.getValue();
    delete cart[cartProductName];
    this.cartProducts.next(cart);
  }

   isExistInCart(cartProductName: string): boolean {
    return !!this.cartProducts.getValue()[cartProductName];
  }

   updateProductAmount(cartProductName: string, amount: number): void {
    const cart = this.cartProducts.getValue();
    cart[cartProductName] = amount;
    this.cartProducts.next(cart);
  }
}
