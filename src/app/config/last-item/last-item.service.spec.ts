import { TestBed } from '@angular/core/testing';

import { LastItemService } from './last-item.service';

describe('LastItemService', () => {
  let service: LastItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
