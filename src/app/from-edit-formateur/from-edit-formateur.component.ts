import { Component, OnInit } from '@angular/core';
import { sessionformateur } from '../sessionformateur';

@Component({
  selector: 'app-from-edit-formateur',
  templateUrl: './from-edit-formateur.component.html',
  styleUrls: ['./from-edit-formateur.component.css']
})
export class FromEditFormateurComponent implements OnInit {
  
  domaine = ['MEAN', 'Angular',
  'NodeJS', 'Android', 'Swift', 'Xamarin'];
 formateur= new  sessionformateur('farah', 'bouakline',  'Lyon','farahbou@gmail.com',this.domaine[0]);
  constructor() { }

  ngOnInit() {
  }
  editSession(sessionItem) {
    console.log(sessionItem);
   }
}
