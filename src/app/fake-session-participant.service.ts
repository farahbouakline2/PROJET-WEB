import { Injectable } from '@angular/core';
import { SESSIONPARTICIPANT} from './sessionparticipants';

@Injectable()
export class FakeSessionParticipantService {
  constructor() { }
  get() { return SESSIONPARTICIPANT; }
  add(sessionItem) {
  sessionItem.id = SESSIONPARTICIPANT.length + 1;
  SESSIONPARTICIPANT.push(sessionItem);
  }
  delete(sessionItem) {
  let index;
  index = SESSIONPARTICIPANT.indexOf(sessionItem);
  if (SESSIONPARTICIPANT.indexOf(sessionItem) >= 0) {
    SESSIONPARTICIPANT.splice(index, 1);
  }
  }
  nb_sessionparticipant(){
    return SESSIONPARTICIPANT.length;
  }
  

}