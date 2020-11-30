import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {loadProducts} from './products/products.actions';
import {ProductsState} from './products/products.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'angular-amaromach';

  constructor(private store: Store<ProductsState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }
}
