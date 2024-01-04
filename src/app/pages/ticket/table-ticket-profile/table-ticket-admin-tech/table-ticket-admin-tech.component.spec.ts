import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTicketAdminTechComponent } from './table-ticket-admin-tech.component';

describe('TableTicketAdminTechComponent', () => {
  let component: TableTicketAdminTechComponent;
  let fixture: ComponentFixture<TableTicketAdminTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTicketAdminTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTicketAdminTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
