import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';

@Component({
selector: 'nav-bar',
templateUrl: './navbar.component.html',
styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  buttonDisabled: boolean = true;
   ngOnInit() {
  }
constructor() {
}


}
