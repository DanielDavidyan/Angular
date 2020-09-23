import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../models/stock.model';
import {ProductsService} from '../product/products.service';
import {CartProductsService} from '../cart/cart-products.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.less']
})
export class CartProductComponent implements OnInit {
  @Input() cartProduct: string;
  product: Product;
  options: number[];
  cartProducts: BehaviorSubject<Record<string, number>>;

  constructor(private productsService: ProductsService,
              private cartProductService: CartProductsService) {
    this.cartProducts = this.cartProductService.getCartProducts();
  }

  ngOnInit(): void {
    this.productsService.getProduct(this.cartProduct).subscribe(val => this.product = val);
    this.options = this.createArray(this.product.limit);
  }

  removeProduct(product: Product): void {
    this.cartProductService.removeProduct(product);
  }

  updateProductAmount(amount: any): void {
    this.cartProductService.updateProductAmount(this.product, amount.value);
  }

  updateInput(event: any): void {
    this.cartProductService.updateProductAmount(this.product, event.target.value);
  }

  createArray(size: number): number[] {
    const arr = [];
    let index = 1;
    for (; index <= size; index++) {
      arr.push(index);
    }
    return arr;
  }
}
