import { TestBed } from '@angular/core/testing';

import { HoteisService } from './hoteis.service';

describe('HoteisService', () => {
  let service: HoteisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoteisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
