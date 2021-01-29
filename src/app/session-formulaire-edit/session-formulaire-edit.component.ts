import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeSessionItemServiceService } from '../fake-session-item.service';
import{Session }from '../Session';

@Component({
  selector: 'app-session-formulaire-edit',
  templateUrl: './session-formulaire-edit.component.html',
  styleUrls: ['./session-formulaire-edit.component.css']
})
export class SessionFormulaireEditComponent implements OnInit {
  id;
 private sub: any;
 session:any;
 tracks = ['MEAN', 'Angular',
 'NodeJS', 'Android', 'Swift', 'Xamarin'];
 /* tracks = ['MEAN', 'Angular',
  'NodeJS', 'Android', 'Swift', 'Xamarin'];
 session = new Session(1, 'Web', this.tracks[0], new
 Date('2018-06-11'), 10, 'Lyon', 0, false);*/

 
  constructor(private route: ActivatedRoute,private sessionItemService:FakeSessionItemServiceService) { }
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
    });

      console.log('Session ID ' + this.id.toString());
 this.session = this.sessionItemService.getSession(this.id);
  }
  editSession(sessionItem) {
    console.log(sessionItem);
   }
  }

