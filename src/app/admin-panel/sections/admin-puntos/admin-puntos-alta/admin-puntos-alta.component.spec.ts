import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPuntosAltaComponent } from './admin-puntos-alta.component';

describe('AdminPuntosAltaComponent', () => {
  let component: AdminPuntosAltaComponent;
  let fixture: ComponentFixture<AdminPuntosAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPuntosAltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPuntosAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
