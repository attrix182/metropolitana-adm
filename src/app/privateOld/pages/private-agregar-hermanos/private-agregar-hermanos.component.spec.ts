import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateAgregarHermanosComponent } from './private-agregar-hermanos.component';

describe('PrivateAgregarHermanosComponent', () => {
  let component: PrivateAgregarHermanosComponent;
  let fixture: ComponentFixture<PrivateAgregarHermanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateAgregarHermanosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateAgregarHermanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
