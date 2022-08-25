import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHorariosListadoComponent } from './admin-horarios-listado.component';

describe('AdminHorariosListadoComponent', () => {
  let component: AdminHorariosListadoComponent;
  let fixture: ComponentFixture<AdminHorariosListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHorariosListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHorariosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
