import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateVerHermanosComponent } from './private-ver-hermanos.component';

describe('PrivateVerHermanosComponent', () => {
  let component: PrivateVerHermanosComponent;
  let fixture: ComponentFixture<PrivateVerHermanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateVerHermanosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateVerHermanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
