import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../product/products.service';
import {Product} from '../models/stock.model';
import {Observable, pipe} from 'rxjs';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  productId;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('productId');
    this.productsService.getProducts().subscribe(products =>
      this.product = products.find(product =>
        product.name === this.productId));
  }
}
