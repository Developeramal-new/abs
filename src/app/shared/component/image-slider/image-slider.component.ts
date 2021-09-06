import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  animations: [
    trigger('slideIn', [
      state('active', style({ 'overflow-y': 'hidden' })),
      state('inactive', style({ 'overflow-y': 'hidden', opacity: '0' })),
      transition('* => inactive', [
        style({ height: '*', opacity: 1 }),
        animate(250, style({ height: 0, opacity: 0 })),
      ]),
      transition('* => active', [
        style({ height: '0', opacity: 0 }),
        animate(250, style({ height: '*', opacity: 1 })),
      ]),
    ]),
  ],
})
export class ImageSliderComponent implements OnInit {
  slides = [];
  num = [];
  slideani = [];
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.slides = [
      { image: '../../assets/Home/1.jpg' },
      { image: '../../assets/Home/2.jpg' },
      { image: '../../assets/Home/3.jpg' },
    ];
    this.num = Array(this.slides.length - 1).fill(1);
    this.slideani = Array(this.slides.length).fill('inactive');
    this.slideani[0] = 'active';
  }

  slide(event) {
    this.slideani = Array(this.slides.length).fill('inactive');
  }
  slid(event) {
    this.slideani[event.to] = 'active';
  }
}
