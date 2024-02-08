import { TestBed } from '@angular/core/testing';

import { VesselOperatorService } from './vessel-operator.service';

describe('VesselOperatorService', () => {
  let service: VesselOperatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VesselOperatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
