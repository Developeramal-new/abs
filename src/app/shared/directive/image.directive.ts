import {
  Directive,
  ElementRef,
  HostListener,
  ChangeDetectorRef,
} from '@angular/core';
import { ImageService } from '../services/image.service';

@Directive({
  // selector: '[appImage]'
  selector: 'img',
})
export class ImageDirective {
  constructor(private el: ElementRef, private imgServ: ImageService) {
    imgServ.imageLoading(el.nativeElement);
  }

  @HostListener('load')
  onLoad() {
    this.imgServ.imageLoadedOrError(this.el.nativeElement);
  }

  @HostListener('error')
  onError() {
    this.imgServ.imageLoadedOrError(this.el.nativeElement);
  }
}
