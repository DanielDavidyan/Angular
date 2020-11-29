import {async, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ProductsService} from './products.service';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../../models/stock.model';
import {HttpClient} from '@angular/common/http';

describe('ProductService', () => {
  let service: ProductsService;
  const productName = 'milk';
  const productNameDoesntExist = 'Product not in stock';
  const productLimit = 5;
  const product: Product = {name: 'milk', description: 'fresh', image: 'www.milk.com', limit: 10, price: 10};

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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the products', () => {
    const products = [product];
    expect(service.getProducts()).toEqual(new BehaviorSubject(products));
  });

  it('should get an existing product', () => {
      let productFromService = {};
      service.getProduct(productName).subscribe(stockProduct => productFromService = stockProduct);
      console.log('exist');
      expect(productFromService).toEqual(product);
    }
  );

  it('should get an non-existent product', () => {
      let productFromService = {};
      service.getProduct(productNameDoesntExist).subscribe(stockProduct => productFromService = stockProduct);
      console.log('doesnt exist');
      expect(productFromService).toEqual(undefined);
    }
  );

  it('should be updateLimit', () => {
    service.updateLimit(productName, productLimit);
    let productLimitFromService = 0;
    service.getProduct(productName).subscribe(stockProduct => productLimitFromService = stockProduct.limit);
    expect(productLimitFromService).toEqual(product.limit);
  });

});
