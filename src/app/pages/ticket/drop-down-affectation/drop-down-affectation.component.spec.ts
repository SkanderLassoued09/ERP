import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownAffectationComponent } from './drop-down-affectation.component';

describe('DropDownAffectationComponent', () => {
  let component: DropDownAffectationComponent;
  let fixture: ComponentFixture<DropDownAffectationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownAffectationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownAffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
