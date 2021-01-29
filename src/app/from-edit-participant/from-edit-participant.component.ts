import { Component, OnInit } from '@angular/core';
import { sessionparticipant } from '../sessionparticipant';

@Component({
  selector: 'app-from-edit-participant',
  templateUrl: './from-edit-participant.component.html',
  styleUrls: ['./from-edit-participant.component.css']
})
export class FromEditParticipantComponent implements OnInit {
  
  
 participant= new  sessionparticipant('farah', 'bouakline',  'Lyon','farahbou@gmail.com');
 
  constructor() { }

  ngOnInit() {
  }
  editSession(sessionItem) {
    console.log(sessionItem);
   }
}
