import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTicketCoordinatorComponent } from './table-ticket-coordinator.component';

describe('TableTicketCoordinatorComponent', () => {
  let component: TableTicketCoordinatorComponent;
  let fixture: ComponentFixture<TableTicketCoordinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTicketCoordinatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTicketCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
