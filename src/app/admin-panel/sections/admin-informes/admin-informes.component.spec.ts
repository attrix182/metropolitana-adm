import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInformesComponent } from './admin-informes.component';

describe('AdminInformesComponent', () => {
  let component: AdminInformesComponent;
  let fixture: ComponentFixture<AdminInformesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInformesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
