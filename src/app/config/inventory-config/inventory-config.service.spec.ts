import { TestBed } from '@angular/core/testing';

import { InventoryConfigService } from './inventory-config.service';

describe('InventoryConfigService', () => {
  let service: InventoryConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
