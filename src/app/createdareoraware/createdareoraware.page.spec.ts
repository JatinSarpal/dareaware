import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDareOrAwarePage } from './createdareoraware.page';

describe('CreateDareOrAwarePage', () => {
  let component: CreateDareOrAwarePage;
  let fixture: ComponentFixture<CreateDareOrAwarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDareOrAwarePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDareOrAwarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
