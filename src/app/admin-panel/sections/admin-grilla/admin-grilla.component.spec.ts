import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGrillaComponent } from './admin-grilla.component';

describe('AdminGrillaComponent', () => {
  let component: AdminGrillaComponent;
  let fixture: ComponentFixture<AdminGrillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGrillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
