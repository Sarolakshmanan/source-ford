import { TestBed } from '@angular/core/testing';

import { MachineListingService } from './machine-listing.service';

describe('MachineListingService', () => {
  let service: MachineListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
