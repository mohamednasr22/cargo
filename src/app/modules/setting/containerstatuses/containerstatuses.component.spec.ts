import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerstatusesComponent } from './containerstatuses.component';

describe('ContainerstatusesComponent', () => {
  let component: ContainerstatusesComponent;
  let fixture: ComponentFixture<ContainerstatusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerstatusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerstatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
