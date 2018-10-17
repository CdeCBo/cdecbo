import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit, AfterViewInit {

  constructor() {}

  ngOnInit() {
  }
  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }
}
