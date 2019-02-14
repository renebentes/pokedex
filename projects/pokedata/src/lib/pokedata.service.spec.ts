import { TestBed } from '@angular/core/testing';

import { PokedataService } from './pokedata.service';

describe('PokedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokedataService = TestBed.get(PokedataService);
    expect(service).toBeTruthy();
  });
});
