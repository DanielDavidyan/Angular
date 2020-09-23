import {Component, OnInit} from '@angular/core';
import {CartProductsService} from '../cart/cart-products.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {
  numberOfProducts: Observable<number>;

  constructor(private cartProductsService: CartProductsService) {
  }

  ngOnInit(): void {
    this.howManyProducts(this.cartProductsService.getCartProducts());
  }

  public howManyProducts(cartProducts: BehaviorSubject<Record<string, number>>): void {
    this.numberOfProducts = cartProducts.pipe(map(products => {
      const productsInCart: string[] = Object.keys(cartProducts.getValue());
      return productsInCart.length;
    }));
  }
}
