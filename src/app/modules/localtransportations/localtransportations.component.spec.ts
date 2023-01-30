import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaltransportationsComponent } from './localtransportations.component';

describe('LocaltransportationsComponent', () => {
  let component: LocaltransportationsComponent;
  let fixture: ComponentFixture<LocaltransportationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocaltransportationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaltransportationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
