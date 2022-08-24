import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHermanosModalDisponibilidadComponent } from './admin-hermanos-modal-disponibilidad.component';

describe('AdminHermanosModalDisponibilidadComponent', () => {
  let component: AdminHermanosModalDisponibilidadComponent;
  let fixture: ComponentFixture<AdminHermanosModalDisponibilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHermanosModalDisponibilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHermanosModalDisponibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
