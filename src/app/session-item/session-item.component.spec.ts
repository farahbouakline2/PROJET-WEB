/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SesseionItemComponent } from './session-item.component';

describe('SesseionItemComponent', () => {
  let component: SesseionItemComponent;
  let fixture: ComponentFixture<SesseionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SesseionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SesseionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
