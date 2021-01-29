/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FakeSessionItemServiceService } from './fake-session-item.service';

describe('FakeSessionItemServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeSessionItemServiceService]
    });
  });

  it('should ...', inject([FakeSessionItemServiceService], (service: FakeSessionItemServiceService) => {
    expect(service).toBeTruthy();
  }));
});
