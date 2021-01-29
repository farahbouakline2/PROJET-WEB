import { Injectable } from '@angular/core';
import { SESSIONFORMATEUR } from './sessionformateurs';

@Injectable()
export class FakeSessionFormateurService {
  constructor() { }
  get() { return SESSIONFORMATEUR; }
  add(sessionItem) {
  sessionItem.id = SESSIONFORMATEUR.length + 1;
  SESSIONFORMATEUR.push(sessionItem);
  }
  delete(sessionItem) {
  let index;
  index = SESSIONFORMATEUR.indexOf(sessionItem);
  if (SESSIONFORMATEUR.indexOf(sessionItem) >= 0) {
    SESSIONFORMATEUR.splice(index, 1);
  }
  }
  nb_sessionformateur(){
    return SESSIONFORMATEUR.length;
  }
  

}
