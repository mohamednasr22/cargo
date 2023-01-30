import { TestBed } from '@angular/core/testing';

import { PermissionguardGuard } from './permissionguard.guard';

describe('PermissionguardGuard', () => {
  let guard: PermissionguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermissionguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
