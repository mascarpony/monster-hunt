import { TestBed } from '@angular/core/testing';

import { CatNamesService } from './cat-names.service';

describe('CatNamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatNamesService = TestBed.get(CatNamesService);
    expect(service).toBeTruthy();
  });
});
