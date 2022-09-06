import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGrillaListadoComponent } from './admin-grilla-listado.component';

describe('AdminGrillaListadoComponent', () => {
  let component: AdminGrillaListadoComponent;
  let fixture: ComponentFixture<AdminGrillaListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGrillaListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGrillaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
