import { FakeSessionItemServiceService } from '../fake-session-item.service';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-session-formulaire-add',
  templateUrl: './session-formulaire-add.component.html',
  styleUrls: ['./session-formulaire-add.component.css']
})
export class SessionFormulaireAddComponent implements OnInit {

  constructor(private sessionItemService:FakeSessionItemServiceService) { }
  
  
  
  ngOnInit() {
  }
  addSession(sessionItem) {
    console.log(sessionItem);
    this.sessionItemService.add(sessionItem);
    
    }
}
