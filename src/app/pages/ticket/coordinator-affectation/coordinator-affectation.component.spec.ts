import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorAffectationComponent } from './coordinator-affectation.component';

describe('CoordinatorAffectationComponent', () => {
  let component: CoordinatorAffectationComponent;
  let fixture: ComponentFixture<CoordinatorAffectationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinatorAffectationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatorAffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
