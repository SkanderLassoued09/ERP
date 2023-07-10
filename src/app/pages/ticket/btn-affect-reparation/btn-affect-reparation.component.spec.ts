import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAffectReparationComponent } from './btn-affect-reparation.component';

describe('BtnAffectReparationComponent', () => {
  let component: BtnAffectReparationComponent;
  let fixture: ComponentFixture<BtnAffectReparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnAffectReparationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnAffectReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
