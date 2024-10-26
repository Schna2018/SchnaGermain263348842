import { TestBed } from '@angular/core/testing';

import { SchnaService } from './schna.service';

describe('SchnaService', () => {
  let service: SchnaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchnaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
