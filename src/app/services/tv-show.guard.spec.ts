import { TestBed, inject } from '@angular/core/testing';

import { TvShowGuard } from './tv-show.guard';

describe('TvShowGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvShowGuard]
    });
  });

  it('should ...', inject([TvShowGuard], (guard: TvShowGuard) => {
    expect(guard).toBeTruthy();
  }));
});
