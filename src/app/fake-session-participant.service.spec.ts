/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FakeSessionParticipantService } from './fake-session-participant.service';

describe('FakeSessionParticipantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeSessionParticipantService]
    });
  });

  it('should ...', inject([FakeSessionParticipantService], (service: FakeSessionParticipantService) => {
    expect(service).toBeTruthy();
  }));
});
