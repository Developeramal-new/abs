import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SvgIconOverrides } from '@ngbmodule/material-carousel';
import { MatCarousel, MatCarouselComponent } from '@ngbmodule/material-carousel';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  icons: SvgIconOverrides = {
    arrowBack: 'arrow_back',
    arrowForward: 'arrow_forward'
  };

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'arrow_back',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/arrow-icons/arrow-back.svg')
    );

    iconRegistry.addSvgIcon(
      'arrow_forward',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/arrow-icons/arrow-forward.svg')
    );
   }

  ngOnInit(): void {
  }

  slides = [
    {'image': '../../assets/Home/1.jpg'}, 
    {'image': '../../assets/Home/2.jpg'},
    {'image': '../../assets/Home/3.jpg'},
  ];

}
