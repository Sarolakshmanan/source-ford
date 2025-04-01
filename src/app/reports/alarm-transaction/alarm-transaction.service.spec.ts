import { TestBed } from '@angular/core/testing';

import { AlarmTransactionService } from './alarm-transaction.service';

describe('AlarmTransactionService', () => {
  let service: AlarmTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlarmTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
