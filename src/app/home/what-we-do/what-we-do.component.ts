import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css'],
  animations: [
    trigger('slideUp', [
      state('active', style({ overflow: 'hidden' })),
      state(
        'inactive',
        style({
          overflow: 'hidden',
          opacity: 0,
          transform: 'translateY(-100%)',
        })
      ),
      transition('* => inactive', [
        style({ opacity: 1 }),
        animate(500, style({ opacity: 0, transform: 'translateY(-100%)' })),
      ]),
      transition('* => active', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1, transform: 'translateY(0%)' })),
      ]),
    ]),
    trigger('slideLeft', [
      state('active', style({ overflow: 'hidden' })),
      state(
        'inactive',
        style({
          overflow: 'hidden',
          opacity: 0,
          transform: 'translateX(-100%)',
        })
      ),
      transition('* => inactive', [
        style({ opacity: 1 }),
        animate(500, style({ opacity: 0, transform: 'translateX(-100%)' })),
      ]),
      transition('* => active', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1, transform: 'translateX(0%)' })),
      ]),
    ]),
    trigger('slideDown', [
      state('active', style({ overflow: 'hidden' })),
      state(
        'inactive',
        style({
          overflow: 'hidden',
          opacity: 0,
          transform: 'translateY(100%)',
        })
      ),
      transition('* => inactive', [
        style({ opacity: 1 }),
        animate(500, style({ opacity: 0, transform: 'translateY(100%)' })),
      ]),
      transition('* => active', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1, transform: 'translateY(0%)' })),
      ]),
    ]),
    trigger('slideRight', [
      state('active', style({ overflow: 'hidden' })),
      state(
        'inactive',
        style({
          overflow: 'hidden',
          opacity: 0,
          transform: 'translateX(100%)',
        })
      ),
      transition('* => inactive', [
        style({ opacity: 1 }),
        animate(500, style({ opacity: 0, transform: 'translateX(100%)' })),
      ]),
      transition('* => active', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1, transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
})
export class WhatWeDoComponent implements OnInit {
  constructor() {}
  hideval = 'inactive';
  hideval2 = 'inactive';
  hideval3 = 'inactive';
  hideval4 = 'inactive';
  ngOnInit(): void {}

  hide(val) {
    if (val) {
      this.hideval = 'active';
    } else {
      this.hideval = 'inactive';
    }
  }

  hide2(val) {
    if (val) {
      this.hideval2 = 'active';
    } else {
      this.hideval2 = 'inactive';
    }
  }
  hide3(val) {
    if (val) {
      this.hideval3 = 'active';
    } else {
      this.hideval3 = 'inactive';
    }
  }
  hide4(val) {
    if (val) {
      this.hideval4 = 'active';
    } else {
      this.hideval4 = 'inactive';
    }
  }
}
