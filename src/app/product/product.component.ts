import {Component, OnInit} from '@angular/core';
import {ProductsService} from './products.service';
import {Product} from '../models/stock.model';
import {Input} from '@angular/core';
import {CartProductsService} from '../cart/cart-products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  productId;

  constructor(private productsService: ProductsService,
              private cartProductsService: CartProductsService) {
  }

  ngOnInit(): void {
    this.productId = this.product.name;
  }

  addProduct(product: Product): void {
    this.cartProductsService.addProduct(product);
  }

  removeProduct(product: Product): void {
    this.cartProductsService.removeProduct(product);
  }

  isExistInCart(product: Product): boolean {
    return this.cartProductsService.isExistInCart(product);
  }
}
