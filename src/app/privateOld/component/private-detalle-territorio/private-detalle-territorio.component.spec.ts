import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDetalleTerritorioComponent } from './private-detalle-territorio.component';

describe('PrivateDetalleTerritorioComponent', () => {
  let component: PrivateDetalleTerritorioComponent;
  let fixture: ComponentFixture<PrivateDetalleTerritorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateDetalleTerritorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateDetalleTerritorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
