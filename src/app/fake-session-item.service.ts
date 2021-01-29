import { Injectable } from '@angular/core';
import { SESSIONITEMS } from './Sessions';

@Injectable()
export class FakeSessionItemServiceService {

  constructor() { }
  get() { return SESSIONITEMS; }
  add(sessionItem) {
  sessionItem.id = SESSIONITEMS.length + 1;
  SESSIONITEMS.push(sessionItem);
  }
  delete(sessionItem) {
  let index;
  index = SESSIONITEMS.indexOf(sessionItem);
  if (SESSIONITEMS.indexOf(sessionItem) >= 0) {
  SESSIONITEMS.splice(index, 1);
  }
  }
  nb_session(){
    return SESSIONITEMS.length;
  }
  getSession(id: number) {
    return SESSIONITEMS[id - 1];
   }
   
}
