import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {CartProductState, getCart, getCartSize} from '../cart/cart.reducer';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {
  cart: Observable<Record<string, number>>;
  numberOfProducts: Observable<number>;

  constructor(private store: Store<CartProductState>) {
  }

  ngOnInit(): void {
    this.cart =  this.store.pipe(select(getCart));
    this.numberOfProducts = this.store.pipe(select(getCartSize));
  }
}
