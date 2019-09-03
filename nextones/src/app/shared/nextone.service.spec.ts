import { TestBed } from '@angular/core/testing';

import { NextoneService } from './nextone.service';

describe('NextoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NextoneService = TestBed.get(NextoneService);
    expect(service).toBeTruthy();
  });
});
