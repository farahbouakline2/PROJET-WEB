/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FromEditFormateurComponent } from './from-edit-formateur.component';

describe('FromEditFormateurComponent', () => {
  let component: FromEditFormateurComponent;
  let fixture: ComponentFixture<FromEditFormateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromEditFormateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromEditFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
