import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentstatusesComponent } from './shipmentstatuses.component';

describe('ShipmentstatusesComponent', () => {
  let component: ShipmentstatusesComponent;
  let fixture: ComponentFixture<ShipmentstatusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentstatusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentstatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
