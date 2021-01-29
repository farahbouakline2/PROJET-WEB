/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FakeSessionFormateurService } from './fake-session-formateur.service';

describe('FakeSessionFormateurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeSessionFormateurService]
    });
  });

  it('should ...', inject([FakeSessionFormateurService], (service: FakeSessionFormateurService) => {
    expect(service).toBeTruthy();
  }));
});
