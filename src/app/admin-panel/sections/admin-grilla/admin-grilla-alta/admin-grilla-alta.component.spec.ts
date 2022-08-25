import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGrillaAltaComponent } from './admin-grilla-alta.component';

describe('AdminGrillaAltaComponent', () => {
  let component: AdminGrillaAltaComponent;
  let fixture: ComponentFixture<AdminGrillaAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGrillaAltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGrillaAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
