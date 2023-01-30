import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatelocaltransportationsComponent } from './createlocaltransportations.component';

describe('CreatelocaltransportationsComponent', () => {
  let component: CreatelocaltransportationsComponent;
  let fixture: ComponentFixture<CreatelocaltransportationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatelocaltransportationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatelocaltransportationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
