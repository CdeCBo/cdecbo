import { Component, OnInit, ViewChild } from '@angular/core';
import {Globals} from './../globals';
import {toInt} from 'ngx-bootstrap/chronos/utils/type-checks';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AfterViewInit} from '@angular/core';
import {interval} from 'rxjs/observable/interval';

const counter = interval(1000);
@Component({
selector: 'nav-bar',
templateUrl: './navbar.component.html',
styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  deadline = new Date('July 02, 2018 00:59:59').getTime();
  today = Date.now();
  timeLeft = (this.deadline - this.today) / 1000;
  countdown = {
    days: Math.floor(this.timeLeft / SECS_IN_DAY),
    hours: Math.floor((this.timeLeft % SECS_IN_DAY) / SECS_IN_HOUR),
    minutes: Math.floor((this.timeLeft % SECS_IN_HOUR) / SECS_IN_MINUTE),
    seconds: toInt((this.timeLeft % SECS_IN_MINUTE))
  };

  dropdownCollapsed = true;
  @ViewChild(ModalDirective) modal: ModalDirective;
  showModal() {
    this.modal.show();
  }

   ngOnInit() {
    counter.subscribe(timeLeft => {
      this.updateCountdown();
      }
    );
  }
  ngAfterViewInit() {
    this.showModal();
  }
  constructor(private globals: Globals) {
  }

  isCollapsed = true;


  updateCountdown(): void {
    this.timeLeft = this.timeLeft - 1;
    this.countdown = {
      days: Math.floor(this.timeLeft / SECS_IN_DAY),
      hours: Math.floor((this.timeLeft % SECS_IN_DAY) / SECS_IN_HOUR),
      minutes: Math.floor((this.timeLeft % SECS_IN_HOUR) / SECS_IN_MINUTE),
      seconds: toInt((this.timeLeft % SECS_IN_MINUTE))
    };
  }
}


const SECS_IN_MINUTE = 60;
const SECS_IN_HOUR = 60 * 60;
const SECS_IN_DAY = 24 * 60 * 60;
