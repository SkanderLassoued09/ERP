import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTicketAdminComponent } from './table-ticket-admin.component';

describe('TableTicketAdminComponent', () => {
  let component: TableTicketAdminComponent;
  let fixture: ComponentFixture<TableTicketAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTicketAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTicketAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
