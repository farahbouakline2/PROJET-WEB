import { FakeSessionParticipantService } from '../fake-session-participant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-add-participant',
  templateUrl: './form-add-participant.component.html',
  styleUrls: ['./form-add-participant.component.css']
})
export class FormAddParticipantComponent implements OnInit {

  constructor(private sessionItemService: FakeSessionParticipantService ) { }

  ngOnInit() {
  }
  addSession(sessionItem) {
    console.log(sessionItem);
    this.sessionItemService.add(sessionItem);
    

}
}