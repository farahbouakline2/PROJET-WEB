import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  myimage3:string="assets/image/image9.png";
  myimage4:string="assets/image/image2.png";
  myimage5:string="assets/image/image4.png";
  myimage6:string="assets/image/image12.png";
  myimage7:string="assets/image/image11.png";
  constructor() { }

  ngOnInit() {
  }
}
