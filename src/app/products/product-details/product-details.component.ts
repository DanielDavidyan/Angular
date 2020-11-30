import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../models/stock.model';
import {getProduct, ProductsState} from '../products.reducer';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {
  product: Observable<Product>;
  productId: string;

  constructor(
    private route: ActivatedRoute,
    private store: Store<ProductsState>
  ) {
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('productId');
    this.product = this.store.pipe(select(getProduct, {productName: this.productId}));
  }
}
