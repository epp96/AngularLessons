import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignemnt2Component } from './assignemnt2.component';

describe('Assignemnt2Component', () => {
  let component: Assignemnt2Component;
  let fixture: ComponentFixture<Assignemnt2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignemnt2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignemnt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
