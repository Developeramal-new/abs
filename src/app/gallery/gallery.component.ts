import { Slidedetails } from './../shared/Models/slidedetails';
import { SharedService } from '../shared/services/shared.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit, AfterViewInit {
  open: boolean = false;
  active: number = 0;
  images: Slidedetails = {
    overlay: false,
    data: [
      { src: '../../assets/1.png', isCaption: false },
      { src: '../../assets/2.png', isCaption: false },
      { src: '../../assets/3.png', isCaption: false },
      { src: '../../assets/bg-2.jpg', isCaption: false },
      { src: '../../assets/bg-side-1.jpg', isCaption: false },
      { src: '../../assets/1.png', isCaption: false },
      { src: '../../assets/1.png', isCaption: false },
      { src: '../../assets/1.png', isCaption: false },
    ],
  };
  constructor(private shared: SharedService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
  }

  openFunc(num) {
    this.active = num;
    this.open = true;
  }

  close() {
    this.open = false;
  }
}
