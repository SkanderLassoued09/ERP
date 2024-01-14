import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTicketTechComponent } from './table-ticket-tech.component';

describe('TableTicketTechComponent', () => {
  let component: TableTicketTechComponent;
  let fixture: ComponentFixture<TableTicketTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTicketTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTicketTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
