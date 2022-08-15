import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateAgregarTerritorioComponent } from './private-agregar-territorio.component';

describe('PrivateAgregarTerritorioComponent', () => {
  let component: PrivateAgregarTerritorioComponent;
  let fixture: ComponentFixture<PrivateAgregarTerritorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateAgregarTerritorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateAgregarTerritorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
