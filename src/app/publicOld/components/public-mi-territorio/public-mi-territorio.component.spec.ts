import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicMiTerritorioComponent } from './public-mi-territorio.component';

describe('PublicMiTerritorioComponent', () => {
  let component: PublicMiTerritorioComponent;
  let fixture: ComponentFixture<PublicMiTerritorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicMiTerritorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicMiTerritorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
