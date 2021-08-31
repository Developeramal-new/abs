import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent implements OnInit {
  slides = [];
  num = [];
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.slides = [
      { image: '../../assets/Home/1.jpg' },
      { image: '../../assets/Home/2.jpg' },
      { image: '../../assets/Home/3.jpg' },
    ];
    this.num = Array(this.slides.length - 1).fill(1);
  }
}
