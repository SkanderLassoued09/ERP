import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownAdminsCooComponent } from './drop-down-admins-coo.component';

describe('DropDownAdminsCooComponent', () => {
  let component: DropDownAdminsCooComponent;
  let fixture: ComponentFixture<DropDownAdminsCooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownAdminsCooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownAdminsCooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
