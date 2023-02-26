import { TestBed } from '@angular/core/testing';

import { LodgerService } from './lodger.service';

describe('LodgerService', () => {
  let service: LodgerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LodgerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
