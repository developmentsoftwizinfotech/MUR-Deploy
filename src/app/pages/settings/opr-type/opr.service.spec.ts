import { TestBed } from '@angular/core/testing';

import { OprService } from './opr.service';

describe('OprService', () => {
  let service: OprService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OprService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
