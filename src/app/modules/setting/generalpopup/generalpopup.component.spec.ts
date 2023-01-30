import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralpopupComponent } from './generalpopup.component';

describe('GeneralpopupComponent', () => {
  let component: GeneralpopupComponent;
  let fixture: ComponentFixture<GeneralpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
