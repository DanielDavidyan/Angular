import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductDetailsComponent} from './product-details.component';
import {ProductsService} from '../product-service/products.service';
import {instance, mock} from 'ts-mockito';
import {ActivatedRoute} from '@angular/router';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  const mockProductService: ProductsService = mock(ProductsService);
  const router: ActivatedRoute = mock(ActivatedRoute);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent],
      providers: [{provide: ProductsService, useValue: instance(mockProductService)},
        {provide: ActivatedRoute, useValue: instance(router)}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
