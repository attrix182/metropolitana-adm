import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHermanosListadoComponent } from './admin-hermanos-listado.component';

describe('AdminHermanosListadoComponent', () => {
  let component: AdminHermanosListadoComponent;
  let fixture: ComponentFixture<AdminHermanosListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHermanosListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHermanosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
