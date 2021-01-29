import { Component, OnInit } from '@angular/core';
import { FakeSessionParticipantService } from '../fake-session-participant.service';

@Component({
  selector: 'app-liste-participants',
  templateUrl: './liste-participants.component.html',
  styleUrls: ['./liste-participants.component.css']
})
export class ListeparticipantsComponent implements OnInit {
  sessionItems;
  constructor(private sessionItemService:FakeSessionParticipantService) { }

  ngOnInit() {
    this.sessionItems=this.sessionItemService.get();
  }

}
