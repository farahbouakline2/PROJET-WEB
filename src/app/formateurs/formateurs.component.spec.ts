/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormateursComponent } from './formateurs.component';

describe('FormateursComponent', () => {
  let component: FormateursComponent;
  let fixture: ComponentFixture<FormateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
