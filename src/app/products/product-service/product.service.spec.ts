import {async, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ProductsService} from './products.service';

describe('ProductService', () => {
  let service: ProductsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ProductsService]
    });
  }));

  beforeEach(() => {
    service = TestBed.inject(ProductsService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
