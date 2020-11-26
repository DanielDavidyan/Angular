import {async, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ProductsService} from './products.service';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../../models/stock.model';
import {HttpClient} from '@angular/common/http';

describe('ProductService', () => {
  let service: ProductsService;
  const productName = 'milk';
  const productLimit = 15;
  const product: Product = {name: 'milk', description: 'fresh', image: 'www.milk.com', limit: 10, price: 10};
  // when(service.getProduct(productName)).thenReturn(of(product));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ProductsService, HttpClient],
    });
  }));
  beforeEach(() => {
    service = TestBed.inject(ProductsService);
    service.products = new BehaviorSubject<Product[]>([product]);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

});
