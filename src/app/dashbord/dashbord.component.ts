import { Component, OnInit } from '@angular/core';
import { FakeSessionFormateurService } from '../fake-session-formateur.service';
import { FakeSessionItemServiceService } from '../fake-session-item.service';
import { FakeSessionParticipantService } from '../fake-session-participant.service';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  

  constructor(private sessionItemService:FakeSessionItemServiceService,private sessionItemf:FakeSessionFormateurService,private sessionItemp:FakeSessionParticipantService) { }
  nb:any=this.sessionItemService.nb_session();
  nb_formateur:any=this.sessionItemf.nb_sessionformateur();
  nb_participant:any=this.sessionItemp.nb_sessionparticipant();
  ngOnInit() {

  }

}
