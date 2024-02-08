import { TestBed } from '@angular/core/testing';

import { ShoreCleaningService } from './shore-cleaning.service';

describe('ShoreCleaningService', () => {
  let service: ShoreCleaningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoreCleaningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
