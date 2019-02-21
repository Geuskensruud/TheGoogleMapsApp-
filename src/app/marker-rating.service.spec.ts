import { TestBed } from '@angular/core/testing';

import { MarkerRatingService } from './marker-rating.service';

describe('MarkerRatingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarkerRatingService = TestBed.get(MarkerRatingService);
    expect(service).toBeTruthy();
  });
});
