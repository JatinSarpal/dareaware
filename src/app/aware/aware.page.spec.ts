import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwarePage } from './aware.page';

describe('AwarePage', () => {
  let component: AwarePage;
  let fixture: ComponentFixture<AwarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwarePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
