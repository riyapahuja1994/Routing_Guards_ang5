import { TestBed, async, inject } from '@angular/core/testing';

import { AccessDetailsGuard } from './access-details.guard';

describe('AccessDetailsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessDetailsGuard]
    });
  });

  it('should ...', inject([AccessDetailsGuard], (guard: AccessDetailsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
