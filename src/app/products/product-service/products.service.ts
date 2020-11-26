import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Product} from '../../models/stock.model';

@Injectable()
export class ProductsService {
  products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('assets/stock.json').subscribe((stockProducts: Product[]) => {
      this.products.next(stockProducts);
    });
  }

  getProducts(): Observable<Product[]> {
      // return this.products.asObservable();
      return this.httpClient.get<Product[]>('assets/stock.json');
  }
}
