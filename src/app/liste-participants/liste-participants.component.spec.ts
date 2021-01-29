import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeparticipantsComponent } from './liste-participants.component';

describe('ListeparticipantsComponent', () => {
  let component: ListeparticipantsComponent;
  let fixture: ComponentFixture<ListeparticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeparticipantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeparticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

