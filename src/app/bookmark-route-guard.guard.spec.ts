import { TestBed, async, inject } from '@angular/core/testing';

import { BookmarkRouteGuardGuard } from './bookmark-route-guard.guard';

describe('BookmarkRouteGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookmarkRouteGuardGuard]
    });
  });

  it('should ...', inject([BookmarkRouteGuardGuard], (guard: BookmarkRouteGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
