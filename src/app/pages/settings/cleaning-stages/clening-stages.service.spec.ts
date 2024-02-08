import { TestBed } from '@angular/core/testing';

import { CleaningStagesService } from './cleaning-stages.service';

describe('CleningStagesService', () => {
  let service: CleaningStagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CleaningStagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
