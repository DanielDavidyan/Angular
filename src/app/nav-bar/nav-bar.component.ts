import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CartProductsService} from '../cart-module/cart-service/cart-products.service';

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
    this.numberOfProducts = this.getNumberOfProductsInCart(this.cartProductsService.getCartProducts());
  }

  private getNumberOfProductsInCart(cartProducts: BehaviorSubject<Record<string, number>>): Observable<number> {
    console.log('nav-bar:', this.cartProductsService.getCartProducts().getValue());

    return cartProducts.pipe(map(() => Object.keys(cartProducts.getValue()).length));

  }
}
