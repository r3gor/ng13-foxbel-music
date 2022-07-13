import { TestBed } from '@angular/core/testing';

import { DeezerSdkService } from './deezer-sdk.service';

describe('DeeezerSdkService', () => {
  let service: DeezerSdkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeezerSdkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
