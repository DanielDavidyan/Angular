import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../product/products.service';
import {Product} from '../models/stock.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}
