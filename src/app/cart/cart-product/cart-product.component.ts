import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/stock.model';
import {ProductsService} from '../../products/product-service/products.service';
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
  cartProducts: Observable<Record<string, number>>;

  constructor(private productsService: ProductsService,
              private cartProductService: CartProductsService) {
  }

  ngOnInit(): void {
    this.cartProducts = this.cartProductService.getCartProducts();
    this.productsService.getProduct(this.cartProductName).subscribe(product => this.product = product);
    this.options = this.createArray(this.product.limit);
  }

  removeProduct(cartProductName: string): void {
    this.cartProductService.removeProduct(cartProductName);
  }

  updateProductAmount(amount: number): void {
    this.cartProductService.updateProductAmount(this.cartProductName, amount);
  }

  private createArray(size: number): number[] {
    return Array.from({length: size}, (_, i) => i + 1);
  }
}
