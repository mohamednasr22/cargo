import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaccountingComponent } from './createaccounting.component';

describe('CreateaccountingComponent', () => {
  let component: CreateaccountingComponent;
  let fixture: ComponentFixture<CreateaccountingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateaccountingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateaccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
