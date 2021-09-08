import { Directive, ElementRef, HostListener } from '@angular/core';
import { ImageService } from '../services/image.service';

@Directive({
  //selector: '[appImage]'
  selector: 'img'
})
export class ImageDirective {

  constructor(private el: ElementRef, private imgServ: ImageService) {

    imgServ.imageLoading(el.nativeElement);

  }

  @HostListener('load')
  onLoad(){
    console.log('Loaded Successfully')
    this.imgServ.imageLoadedOrError(this.el.nativeElement);
  }

  @HostListener('error')
  onError(){
    console.log('Error Successfully')
    this.imgServ.imageLoadedOrError(this.el.nativeElement);
  }

}
