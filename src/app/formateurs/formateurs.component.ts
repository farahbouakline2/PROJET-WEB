import { Component, OnInit,Input } from '@angular/core';
import { FakeSessionFormateurService } from '../fake-session-formateur.service';

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']
})
export class FormateursComponent implements OnInit {
@Input()sessionformateur:any;
  constructor(private sessionItemService:FakeSessionFormateurService) { }
  
  ngOnInit() {
  }
  onDelete(){
    console.log(this.sessionformateur);
    this.sessionItemService.delete(this.sessionformateur);
  }
}
