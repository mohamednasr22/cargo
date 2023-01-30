import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentnotesComponent } from './shipmentnotes.component';

describe('ShipmentnotesComponent', () => {
  let component: ShipmentnotesComponent;
  let fixture: ComponentFixture<ShipmentnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentnotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
