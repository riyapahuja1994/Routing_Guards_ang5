import { TestBed, inject } from '@angular/core/testing';

import { UsersFetchService } from './users-fetch.service';

describe('UsersFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersFetchService]
    });
  });

  it('should be created', inject([UsersFetchService], (service: UsersFetchService) => {
    expect(service).toBeTruthy();
  }));
});
