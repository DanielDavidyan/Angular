import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../../models/stock.model';
import {ProductsService} from '../../products-module/product-service/products.service';
import {CartProductsService} from '../cart-service/cart-products.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.less']
})
export class CartProductComponent implements OnInit {
  @Input() cartProductName: string;
  product: Product;
  options: number[];
  cartProducts: BehaviorSubject<Record<string, number>>;

  constructor(private productsService: ProductsService,
              private cartProductService: CartProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getProduct(this.cartProductName).subscribe(product => this.product = product);
    this.options = this.createArray(this.product.limit);
    this.cartProducts = this.cartProductService.getCartProducts();
  }

  removeProduct(cartProductName: string): void {
    this.cartProductService.removeProduct(cartProductName);
  }

  updateProductAmount(amount: any): void {
    this.cartProductService.updateProductAmount(this.cartProductName, amount.value);
  }

  updateInput(event: any): void {
    this.cartProductService.updateProductAmount(this.cartProductName, event.target.value);
  }

  private createArray(size: number): number[] {
    const arr = [];
    for (let index = 1; index <= size; index++) {
      arr.push(index);
    }
    return arr;
  }
}
