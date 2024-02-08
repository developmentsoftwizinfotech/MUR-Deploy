import { TestBed } from '@angular/core/testing';

import { ApplicabilityService } from './applicability.service';

describe('ApplicabilityService', () => {
  let service: ApplicabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
