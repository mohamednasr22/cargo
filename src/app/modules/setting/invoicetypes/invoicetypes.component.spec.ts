import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicetypesComponent } from './invoicetypes.component';

describe('InvoicetypesComponent', () => {
  let component: InvoicetypesComponent;
  let fixture: ComponentFixture<InvoicetypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicetypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicetypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
