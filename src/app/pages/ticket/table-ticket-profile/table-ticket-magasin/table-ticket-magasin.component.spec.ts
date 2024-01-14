import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTicketMagasinComponent } from './table-ticket-magasin.component';

describe('TableTicketMagasinComponent', () => {
  let component: TableTicketMagasinComponent;
  let fixture: ComponentFixture<TableTicketMagasinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTicketMagasinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTicketMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
