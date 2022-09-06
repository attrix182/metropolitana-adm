import { TestBed } from '@angular/core/testing';

import { AdminGrillaService } from './admin-grilla.service';

describe('AdminGrillaService', () => {
  let service: AdminGrillaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminGrillaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
