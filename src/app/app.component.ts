import { Component, OnInit } from '@angular/core';

import data from './models/menu.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  menuItems: any[]=[];

  constructor(){
    this.menuItems = data;
  }
  ngOnInit(): void {
   console.log(data)
  }

}
