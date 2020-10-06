import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../models/stock.model';
import {ProductsService} from '../product-service/products.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  productId: string;

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
