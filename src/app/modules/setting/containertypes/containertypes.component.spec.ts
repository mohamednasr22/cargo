import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainertypesComponent } from './containertypes.component';

describe('ContainertypesComponent', () => {
  let component: ContainertypesComponent;
  let fixture: ComponentFixture<ContainertypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainertypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainertypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
