import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../models/stock.model';
import {ProductsService} from '../product-service/products.service';
import {getProduct, ProductsState} from '../products.reducer';
import {Store} from '@ngrx/store';


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
    private store: Store<ProductsState>
  ) {
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('productId');
    this.store.select(getProduct, {productName: this.product.name}).subscribe(prod => this.product = prod);
    // this.productsService.getProduct(this.productId).subscribe(product => this.product = product);
  }
}
