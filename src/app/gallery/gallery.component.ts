import { SharedService } from '../shared/services/shared.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit, AfterViewInit {
  constructor(private shared: SharedService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.shared.loading.next(false);
  }
}
