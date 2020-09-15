import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {Product} from '../models/stock.model';
import {combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartProductsService {
  cartProducts: BehaviorSubject<Record<string, number>>;

  constructor() {
    this.cartProducts = new BehaviorSubject<Record<string, number>>({});
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
      } else {
        console.log('Sold out!');
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


  // public updateProductAmount(product: Product, amount: number) {
  //   if (product.limit >= amount) {
  //     let cart = this.productsInCart.getValue();
  //     cart[product.name] = amount;
  //     this.productsInCart.next(cart);
  //   } else
  //     console.log(`You can buy maximum ${product.limit} ${product.name}`);
  // }
  //

  public getTotalPrice(products: Observable<Product[]>): number {
    let totalPrice = 0;
    combineLatest([this.cartProducts, products]).subscribe(([cart, stock]) => {
      const productsInCart: string[] = Object.keys(cart);
      totalPrice = productsInCart.reduce((total, product) =>
        total + (cart[product] * stock.find((prod) => prod.name === product).price)
        , 0);
    });
    return totalPrice;
  }


  // public checkout(stock: Observable<Product[]>) {
  //   combineLatest([this.productsInCart, stock]).subscribe(([cart, stock]) => {
  //     const productsInCart: string[] = Object.keys(cart);
  //     productsInCart.map(cartProduct => {
  //       const stockProduct = stock.find(product => product.name === cartProduct);
  //       stockProduct.limit -= cart[cartProduct];
  //     })
  //   })
  // }


}



