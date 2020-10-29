import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Product} from '../../models/stock.model';
import {map} from 'rxjs/operators';

@Injectable()
export class ProductsService {
  private readonly products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('assets/stock.json').subscribe((stockProducts: Product[]) => {
      this.products.next(stockProducts);
    });
  }

  getProducts(): Observable<Product[]> {
    return this.products;
  }

  getProduct(productName: string): Observable<Product> {
    return this.products.pipe(map((products: Product[]) =>
      products.find(stockProduct => stockProduct.name === productName)));
  }

  updateLimit(productName: string, limit: number): void {
    const currentProducts = this.products.getValue();
    const productIndex = currentProducts.findIndex((originalProduct: Product) => originalProduct.name === productName);
    if (productIndex !== -1 && currentProducts[productIndex].limit) {
        currentProducts[productIndex].limit -= limit;
        this.products.next(currentProducts);
    }
  }
}
