import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../models/stock.model';


@Injectable({
  providedIn: 'root'
})
export class CartProductsService {
  private readonly cartProducts: BehaviorSubject<Record<string, number>>;
  totalPrice;

  constructor() {
    this.cartProducts = new BehaviorSubject<Record<string, number>>({});
    this.totalPrice = 0;
  }

  getCartProducts(): BehaviorSubject<Record<string, number>> {
    return this.cartProducts;
  }

  public addProduct(product: Product): void {
    if (product) {
      if (product.limit > 0 || product.limit === undefined) {
        const cart = this.cartProducts.getValue();
        cart[product.name] = 1;
        this.cartProducts.next(cart);
      }
    }
  }

  public removeProduct(product: Product): void {
    const cart = this.cartProducts.getValue();
    delete cart[product.name];
    this.cartProducts.next(cart);
  }

  public isExistInCart(product: Product): boolean {
    return !!this.cartProducts.getValue()[product.name];
  }

  public updateProductAmount(product: Product, amount: number): void {
    const cart = this.cartProducts.getValue();
    cart[product.name] = amount;
    this.cartProducts.next(cart);
  }
}






