import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDisponibilidadComponent } from './admin-disponibilidad.component';

describe('AdminDisponibilidadComponent', () => {
  let component: AdminDisponibilidadComponent;
  let fixture: ComponentFixture<AdminDisponibilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDisponibilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDisponibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
