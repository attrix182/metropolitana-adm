import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHermanosComponent } from './admin-hermanos.component';

describe('AdminHermanosComponent', () => {
  let component: AdminHermanosComponent;
  let fixture: ComponentFixture<AdminHermanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHermanosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHermanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
