import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarTerritorioComponent } from './solicitar-territorio.component';

describe('SolicitarTerritorioComponent', () => {
  let component: SolicitarTerritorioComponent;
  let fixture: ComponentFixture<SolicitarTerritorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarTerritorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarTerritorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
