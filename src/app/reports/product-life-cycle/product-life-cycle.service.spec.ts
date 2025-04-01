import { TestBed } from '@angular/core/testing';

import { ProductLifeCycleService } from './product-life-cycle.service';

describe('ProductLifeCycleService', () => {
  let service: ProductLifeCycleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductLifeCycleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
