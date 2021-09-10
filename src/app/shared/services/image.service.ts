import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private imageLoad = new Subject<number>();
  private images: Map<HTMLElement, boolean> = new Map();
  private imagesLoading = 0;

  imagesLoading$ = this.imageLoad.asObservable();

  constructor(private iserv: SharedService) {}

  imageLoading(img: HTMLElement) {
    this.iserv.loading.next(true);
    if (
      (!this.images.has(img) || this.images.get(img)) &&
      img.className !== 'loader'
    ) {
      this.images.set(img, false);
      this.imagesLoading++;
      this.imageLoad.next(this.imagesLoading);
    }
  }

  imageLoadedOrError(img: HTMLElement) {
    if (
      this.images.has(img) &&
      !this.images.get(img) &&
      img.className !== 'loader'
    ) {
      this.images.set(img, true);
      this.imagesLoading--;
      this.imageLoad.next(this.imagesLoading);
    }
    // let jhonKeys = [...this.images.entries()]
    //     .filter(({ 1: v }) => v === false)
    //     .map(([k]) => k);
    setTimeout(() => {
      if (this.imagesLoading == 0) {
        this.iserv.loading.next(false);
      } else {
        this.iserv.loading.next(true);
      }
    }, 100);
  }
}
