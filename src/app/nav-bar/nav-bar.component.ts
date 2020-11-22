import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {CartProductState, getCart} from '../cart/cart.reducer';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {
  cart: BehaviorSubject<Record<string, number>>;
  numberOfProducts: Observable<number>;

  constructor(private store: Store<CartProductState>) {
  }

  ngOnInit(): void {
    this.cart = new BehaviorSubject({});
    this.store.select(getCart).subscribe(tempCart => this.cart.next(tempCart));
    this.store.select(getCart).subscribe(tempCart => this.cart.next(tempCart));
    this.numberOfProducts = this.getNumberOfProductsInCart(this.cart);
  }

  private getNumberOfProductsInCart(cartProducts: BehaviorSubject<Record<string, number>>): Observable<number> {
    return cartProducts.pipe(map(() => Object.keys(cartProducts.getValue()).length));
  }
}
