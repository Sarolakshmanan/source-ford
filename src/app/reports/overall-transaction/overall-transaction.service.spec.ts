import { TestBed } from '@angular/core/testing';

import { OverallTransactionService } from './overall-transaction.service';

describe('OverallTransactionService', () => {
  let service: OverallTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverallTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
