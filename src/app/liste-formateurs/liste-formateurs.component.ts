import { Component, OnInit } from '@angular/core';
import { FakeSessionFormateurService } from '../fake-session-formateur.service';

@Component({
  selector: 'app-liste-formateurs',
  templateUrl: './liste-formateurs.component.html',
  styleUrls: ['./liste-formateurs.component.css']
})
export class ListeFormateursComponent implements OnInit {
  sessionItems;
  constructor(private sessionItemService:FakeSessionFormateurService) { }

  ngOnInit() {
    this.sessionItems=this.sessionItemService.get();
  }

}
