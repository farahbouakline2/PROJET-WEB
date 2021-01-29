/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { participantsComponent } from './participants.component';

describe('participantsComponent', () => {
  let component: participantsComponent;
  let fixture: ComponentFixture<participantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ participantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(participantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
