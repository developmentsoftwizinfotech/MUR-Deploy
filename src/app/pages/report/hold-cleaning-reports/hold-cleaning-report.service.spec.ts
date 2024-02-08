import { TestBed } from '@angular/core/testing';

import { HoldCleaningReportService } from './hold-cleaning-report.service';

describe('HoldCleaningReportService', () => {
  let service: HoldCleaningReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoldCleaningReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
