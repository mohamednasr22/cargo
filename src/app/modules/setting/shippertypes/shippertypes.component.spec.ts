import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippertypesComponent } from './shippertypes.component';

describe('ShippertypesComponent', () => {
  let component: ShippertypesComponent;
  let fixture: ComponentFixture<ShippertypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippertypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippertypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
