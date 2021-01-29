import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
  @Input() session:any;
  constructor() { }

  ngOnInit() {
  }

}
