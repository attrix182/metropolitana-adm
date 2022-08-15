import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTerritorioComponent } from './card-territorio.component';

describe('CardTerritorioComponent', () => {
  let component: CardTerritorioComponent;
  let fixture: ComponentFixture<CardTerritorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTerritorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTerritorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
