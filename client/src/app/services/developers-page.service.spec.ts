import { TestBed } from '@angular/core/testing';

import { DevelopersPageService } from './developers-page.service';

describe('DevelopersPageService', () => {
  let service: DevelopersPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevelopersPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
