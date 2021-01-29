import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddParticipantComponent } from './form-add-participant.component';

describe('FormAddParticipantComponent', () => {
  let component: FormAddParticipantComponent;
  let fixture: ComponentFixture<FormAddParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddParticipantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
