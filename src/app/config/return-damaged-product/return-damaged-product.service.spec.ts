import { TestBed } from '@angular/core/testing';

import { ReturnDamagedProductService } from './return-damaged-product.service';

describe('ReturnDamagedProductService', () => {
  let service: ReturnDamagedProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnDamagedProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
