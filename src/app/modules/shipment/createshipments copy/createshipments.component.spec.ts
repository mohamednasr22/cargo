import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateshipmentsComponent } from './createshipments.component';

describe('CreateshipmentsComponent', () => {
  let component: CreateshipmentsComponent;
  let fixture: ComponentFixture<CreateshipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateshipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateshipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
