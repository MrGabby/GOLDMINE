import { TestBed } from '@angular/core/testing';

import { GoldmineService } from './goldmine.service';

describe('GoldmineService', () => {
  let service: GoldmineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoldmineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
