import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hackbo-home',
  templateUrl: './hackbo-home.component.html',
  styleUrls: ['./hackbo-home.component.scss']
})
export class HackboHomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

}
