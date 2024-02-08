import { TestBed } from '@angular/core/testing';

import { ChartererService } from './charterer.service';

describe('ChartererService', () => {
  let service: ChartererService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartererService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
