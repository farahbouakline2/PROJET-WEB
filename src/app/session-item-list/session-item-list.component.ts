import { Component, OnInit } from '@angular/core';
import { FakeSessionItemServiceService } from '../fake-session-item.service';


  
@Component({
  selector: 'app-session-item-list',
  templateUrl: './session-item-list.component.html',
  styleUrls: ['./session-item-list.component.css']
})
export class SessionItemListComponent implements OnInit {
  myimage1:string="assets/image/list.png";
  myimage2:string="assets/image/add.png";
  myimage3:string="assets/image/edit.png";
  
    sessionItems;
  constructor(private sessionItemService:FakeSessionItemServiceService) { }

  ngOnInit() {
    this.sessionItems=this.sessionItemService.get();
  }

}
