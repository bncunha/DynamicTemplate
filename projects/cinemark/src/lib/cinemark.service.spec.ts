import { TestBed } from '@angular/core/testing';

import { CinemarkService } from './cinemark.service';

describe('CinemarkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CinemarkService = TestBed.get(CinemarkService);
    expect(service).toBeTruthy();
  });
});
