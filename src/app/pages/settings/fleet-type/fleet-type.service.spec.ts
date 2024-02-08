import { TestBed } from '@angular/core/testing';

import { FleetTypeService } from './fleet-type.service';

describe('FleetTypeService', () => {
  let service: FleetTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FleetTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
