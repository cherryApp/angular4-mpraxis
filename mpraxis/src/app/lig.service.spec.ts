import { TestBed, inject } from '@angular/core/testing';

import { LigService } from './lig.service';

describe('LigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LigService]
    });
  });

  it('should be created', inject([LigService], (service: LigService) => {
    expect(service).toBeTruthy();
  }));
});
