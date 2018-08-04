import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cdecbo-home',
  templateUrl: './cdecbo-home.component.html',
  styleUrls: ['./cdecbo-home.component.scss']
})
export class CdecboHomeComponent implements OnInit {
  isCollapsed = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
  isCollapsedDC = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
  showScz = true;

  showClub(lugar) {
    if (lugar === 'scz') {
      this.showScz = true;
    } else {
      this.showScz = false;
    }
  }

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      if (this.route.snapshot.paramMap.get('id') === 'DC') {
        this.showScz = false;
      } else {
        this.showScz = true;
      }
    }
  }

}
