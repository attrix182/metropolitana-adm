import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGrillaAltaConfirmacionComponent } from './admin-grilla-alta-confirmacion.component';

describe('AdminGrillaAltaConfirmacionComponent', () => {
  let component: AdminGrillaAltaConfirmacionComponent;
  let fixture: ComponentFixture<AdminGrillaAltaConfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGrillaAltaConfirmacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGrillaAltaConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
