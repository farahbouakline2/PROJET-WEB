/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SessionFormulaireAddComponent } from './session-formulaire-add.component';

describe('SessionFormulaireAddComponent', () => {
  let component: SessionFormulaireAddComponent;
  let fixture: ComponentFixture<SessionFormulaireAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionFormulaireAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionFormulaireAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
