import { TestBed } from '@angular/core/testing';

import { HttpDeezerService } from './http-deezer.service';

describe('DeezerService', () => {
  let service: HttpDeezerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpDeezerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
