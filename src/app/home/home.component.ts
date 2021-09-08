import { Slidedetails } from './../shared/Models/slidedetails';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  slides: Slidedetails = {
    overlay: true,
    data: [
      {
        src: '../../assets/Home/1.jpg',
        isCaption: true,
        caption: { h6: 'Heading 6', h1: 'Heading 1', button: 'Button Name' },
      },
      {
        src: '../../assets/Home/2.jpg',
        isCaption: true,
        caption: { h6: 'Heading 6', h1: 'Heading 1', button: 'Button Name' },
      },
      {
        src: '../../assets/Home/3.jpg',
        isCaption: true,
        caption: { h6: 'Heading 6', h1: 'Heading 1', button: 'Button Name' },
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
