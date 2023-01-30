import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicestatusesComponent } from './invoicestatuses.component';

describe('InvoicestatusesComponent', () => {
  let component: InvoicestatusesComponent;
  let fixture: ComponentFixture<InvoicestatusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicestatusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicestatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
