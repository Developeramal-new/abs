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
    trigger('slideIn', [
      state('active', style({ 'overflow-y': 'hidden' })),
      state(
        'inactive',
        style({
          'overflow-y': 'hidden',
          opacity: 0,
          transform: 'translateX(-100%)',
        })
      ),
      transition('* => inactive', [
        style({ opacity: 1 }),
        animate(1000, style({ opacity: 0, transform: 'translateX(-100%)' })),
      ]),
      transition('* => active', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1, transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
})
export class WhatWeDoComponent implements OnInit {
  constructor() {}
  hideval = 'inactive';
  ngOnInit(): void {}

  hide(val) {
    console.log(val);
    if (val) {
      this.hideval = 'active';
    } else {
      this.hideval = 'inactive';
    }
  }
}
