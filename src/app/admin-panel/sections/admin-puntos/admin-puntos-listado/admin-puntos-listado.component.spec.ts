import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPuntosListadoComponent } from './admin-puntos-listado.component';

describe('AdminPuntosListadoComponent', () => {
  let component: AdminPuntosListadoComponent;
  let fixture: ComponentFixture<AdminPuntosListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPuntosListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPuntosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
