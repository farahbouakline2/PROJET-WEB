
import { FakeSessionItemServiceService } from '../fake-session-item.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Session } from '../session';


@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SesseionItemComponent implements OnInit {
  @Input() session:any;
  constructor(private sessionItemService:FakeSessionItemServiceService) { }


  
  ngOnInit() {
  
  }
  onDelete(){
    console.log(this.session);
    this.sessionItemService.delete(this.session);
  }

  

 
 
}

