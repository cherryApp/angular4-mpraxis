import { TestBed, inject } from '@angular/core/testing';

import { MssqlService } from './mssql.service';

describe('MssqlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MssqlService]
    });
  });

  it('should be created', inject([MssqlService], (service: MssqlService) => {
    expect(service).toBeTruthy();
  }));
});
