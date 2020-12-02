import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/stock.model';
import {select, Store} from '@ngrx/store';
import {getProducts, ProductsState} from '../products.reducer';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private store: Store<ProductsState>) {
  }

  ngOnInit(): void {
    this.products = this.store.pipe(select(getProducts));
  }
}
