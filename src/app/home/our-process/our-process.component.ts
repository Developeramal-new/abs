import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-our-process',
  templateUrl: './our-process.component.html',
  styleUrls: ['./our-process.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ height: '0', opacity: 0 }),
        animate(250, style({ height: '*', opacity: 1 })),
      ]),
    ]),
  ],
})
export class OurProcessComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
