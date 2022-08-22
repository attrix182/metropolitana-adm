import { TestBed } from '@angular/core/testing';

import { AdminDisponibilidadService } from './admin-disponibilidad.service';

describe('AdminDisponibilidadService', () => {
  let service: AdminDisponibilidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminDisponibilidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
