import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import {FakeSessionItemServiceService } from './fake-session-item.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe, FakeSessionItemServiceService ]
})
export class AppComponent {
  myimage1:string="assets/image/image1.jpeg";
  myimage2:string="assets/image/image10.png";
  myimage3:string="assets/image/image9.png";
  myimage4:string="assets/image/image2.png";
  myimage5:string="assets/image/image4.png";
  myimage6:string="assets/image/image12.png";
  myimage7:string="assets/image/image11.png";

  myDate = new Date();

  //session_name = 'Formation Web';
  nbpart:number=0;
  
  firstSession = {
      id: 1,
      name: 'Formation Web',
      track: 'MEAN Stack',
      date: new Date('2018-06-13'),
      duree: 3,
      local: 'Lyon',
      participants: 0
      };
     

  
  changeParticiapntsnbr(event){
 this.nbpart=event.value;
  }
}
