import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTicketManagerComponent } from './table-ticket-manager.component';

describe('TableTicketManagerComponent', () => {
  let component: TableTicketManagerComponent;
  let fixture: ComponentFixture<TableTicketManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTicketManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTicketManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
