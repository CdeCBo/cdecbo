import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-foundation',
  templateUrl: './foundation.component.html',
  styleUrls: ['./foundation.component.scss']
})
export class FoundationComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

}
