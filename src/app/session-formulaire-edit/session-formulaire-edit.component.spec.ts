/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SessionFormulaireEditComponent } from './session-formulaire-edit.component';

describe('SessionFormulaireEditComponent', () => {
  let component: SessionFormulaireEditComponent;
  let fixture: ComponentFixture<SessionFormulaireEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionFormulaireEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionFormulaireEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
