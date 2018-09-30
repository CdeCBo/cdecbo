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
  showScz = false;
  showDC = false;
  showLpcTestimonio = false;
  showAtTestimonio = false;

  showClub(lugar) {
    if (lugar === 'Scz') {
      this.showScz = true;
    } else {
      this.showScz = false;
    }

    if (lugar === 'DC') {
      this.showDC = true;
    } else {
      this.showDC = false;
    }
  }

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      if (this.route.snapshot.paramMap.get('id') === 'DC') {
        this.showDC = true;
      } else {
        this.showDC = false;
      }
    }
    if (this.route.snapshot.paramMap.get('id') === 'Scz') {
      this.showScz = true;
    } else {
      this.showScz = false;
    }
  }

}
