import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdecbo-home',
  templateUrl: './cdecbo-home.component.html',
  styleUrls: ['./cdecbo-home.component.scss']
})
export class CdecboHomeComponent implements OnInit {
  isCollapsed = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];

  constructor() { }

  ngOnInit() {
  }

}
