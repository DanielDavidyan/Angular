import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../models/stock.model';
import {ProductsService} from '../product/products.service';
import {CartProductsService} from '../cart/cart-products.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.less']
})
export class CartProductComponent implements OnInit {
  @Input() cartProduct: string;
  product: Product;
  amount = '1';
  options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // refactor!!!!!!!

  constructor(private productsService: ProductsService,
              private cartProductService: CartProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products => this.product = products.find(product => product.name === this.cartProduct));
    console.log('selected', this.amount); // remove
    setTimeout(() => console.log('amount is: ', this.amount), 6000); // remove
    console.log('totalllllll', this.getTotalPrice(this.productsService.getProducts()));

  }

  removeProduct(product: Product): void {
    this.cartProductService.removeProduct(product);
  }

  getTotalPrice(products: Observable<Product[]>): number {
    return this.cartProductService.getTotalPrice(products);
  }

}

