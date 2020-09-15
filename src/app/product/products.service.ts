import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import {Product} from '../models/stock.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Observable<Product[]>;

  constructor(private httpClient: HttpClient) {
    this.products = this.httpClient.get('assets/stock.json') as Observable<Product[]>;
  }
  getProducts(): Observable<Product[]>{
    return this.products;
  }
}
