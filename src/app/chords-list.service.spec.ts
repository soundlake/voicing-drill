import { TestBed } from '@angular/core/testing';

import { ChordsListService } from './chords-list.service';

describe('ChordsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChordsListService = TestBed.get(ChordsListService);
    expect(service).toBeTruthy();
  });
});
