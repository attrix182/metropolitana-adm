import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHorariosAltaComponent } from './admin-horarios-alta.component';

describe('AdminHorariosAltaComponent', () => {
  let component: AdminHorariosAltaComponent;
  let fixture: ComponentFixture<AdminHorariosAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHorariosAltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHorariosAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
