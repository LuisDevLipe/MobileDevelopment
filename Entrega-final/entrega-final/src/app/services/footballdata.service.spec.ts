import { TestBed } from '@angular/core/testing';

import { FootballdataService } from './footballdata.service';

describe('FootballdataService', () => {
  let service: FootballdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootballdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
