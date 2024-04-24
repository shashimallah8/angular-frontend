import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

import data from './models/menu.json';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

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
