import { Component, OnInit } from '@angular/core';
import {Globals} from './../globals';

@Component({
selector: 'nav-bar',
templateUrl: './navbar.component.html',
styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  dropdownCollapsed = true;

   ngOnInit() {
  }
  constructor(private globals: Globals) {
  }

  isCollapsed = true;


}
