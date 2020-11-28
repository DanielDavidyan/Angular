import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {loadProducts} from './products/products.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'angular-amaromach';

  constructor(private store: Store<any>) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    // ngrxOnInitEffects
  }

}
