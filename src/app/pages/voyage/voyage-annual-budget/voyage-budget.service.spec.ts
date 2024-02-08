import { TestBed } from '@angular/core/testing';

import { VoyageBudgetService } from './voyage-budget.service';

describe('VoyageBudgetService', () => {
  let service: VoyageBudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoyageBudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
