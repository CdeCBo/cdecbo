import { Component, OnInit } from '@angular/core';
import {Globals} from './../globals';

@Component({
selector: 'nav-bar',
templateUrl: './navbar.component.html',
styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  
   ngOnInit() {
  }
  constructor(private globals: Globals) {
  }

  
  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }

  isCollapsed = true;
 
  
}
