import { FakeSessionFormateurService } from '../fake-session-formateur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-add-formateur',
  templateUrl: './form-add-formateur.component.html',
  styleUrls: ['./form-add-formateur.component.css']
})
export class FormAddFormateurComponent implements OnInit {

  constructor(private sessionItemService: FakeSessionFormateurService ) { }

  ngOnInit() {
  }
  addSession(sessionItem) {
    console.log(sessionItem);
    this.sessionItemService.add(sessionItem);
    
    }
}
