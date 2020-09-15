import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../product/products.service';
import {CartProductsService} from '../cart/cart-products.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.less']
})
export class CartListComponent implements OnInit {
  cartProducts: BehaviorSubject<Record<string, number>>;

  constructor(private cartProductsService: CartProductsService ) { }

  ngOnInit(): void {
    this.cartProducts = this.cartProductsService.getCartProducts();
  }

}
