import { TestBed } from '@angular/core/testing';

import { QuoteGuard } from './quote.guard';

describe('QuoteGuard', () => {
  let guard: QuoteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(QuoteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
