import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateVerTerritoriosComponent } from './private-ver-territorios.component';

describe('PrivateVerTerritoriosComponent', () => {
  let component: PrivateVerTerritoriosComponent;
  let fixture: ComponentFixture<PrivateVerTerritoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateVerTerritoriosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateVerTerritoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
