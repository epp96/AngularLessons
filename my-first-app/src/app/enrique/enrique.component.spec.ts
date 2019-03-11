import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnriqueComponent } from './enrique.component';

describe('EnriqueComponent', () => {
  let component: EnriqueComponent;
  let fixture: ComponentFixture<EnriqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnriqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
