import { TestBed } from '@angular/core/testing';

import { CryptologicServiceService } from './cryptologic-service.service';

describe('CryptologicServiceService', () => {
  let service: CryptologicServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptologicServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
