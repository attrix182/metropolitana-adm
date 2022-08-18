import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHermanosAltaComponent } from './admin-hermanos-alta.component';

describe('AdminHermanosAltaComponent', () => {
  let component: AdminHermanosAltaComponent;
  let fixture: ComponentFixture<AdminHermanosAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHermanosAltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHermanosAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
