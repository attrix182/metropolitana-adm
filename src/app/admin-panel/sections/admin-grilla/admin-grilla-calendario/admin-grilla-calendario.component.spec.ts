import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGrillaCalendarioComponent } from './admin-grilla-calendario.component';

describe('AdminGrillaCalendarioComponent', () => {
  let component: AdminGrillaCalendarioComponent;
  let fixture: ComponentFixture<AdminGrillaCalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGrillaCalendarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGrillaCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
