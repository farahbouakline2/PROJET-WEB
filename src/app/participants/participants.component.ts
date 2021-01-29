import { Component, OnInit,Input } from '@angular/core';
import { FakeSessionParticipantService } from '../fake-session-participant.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class participantsComponent implements OnInit {
@Input()sessionparticipant:any;
  constructor(private sessionItemService:FakeSessionParticipantService) { }
  
  ngOnInit() {
  }
  onDelete(){
    console.log(this.sessionparticipant);
    this.sessionItemService.delete(this.sessionparticipant);
  }
}


