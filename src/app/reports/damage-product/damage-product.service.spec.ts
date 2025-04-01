import { TestBed } from '@angular/core/testing';

import { DamageProductService } from './damage-product.service';

describe('DamageProductService', () => {
  let service: DamageProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DamageProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
