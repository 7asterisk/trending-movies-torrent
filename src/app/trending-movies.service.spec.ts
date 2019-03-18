import { TestBed } from '@angular/core/testing';

import { TrendingMoviesService } from './trending-movies.service';

describe('TrendingMoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrendingMoviesService = TestBed.get(TrendingMoviesService);
    expect(service).toBeTruthy();
  });
});
