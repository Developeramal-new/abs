import {
  ElementRef,
  Output,
  Directive,
  AfterViewInit,
  OnDestroy,
  EventEmitter,
} from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[appear]',
})
export class AppearDirective implements AfterViewInit, OnDestroy {
  @Output()
  appear: EventEmitter<boolean>;

  elementPos: number;
  elementHeight: number;

  scrollPos: number;
  windowHeight: number;

  subscriptionScroll: Subscription;
  subscriptionResize: Subscription;

  constructor(private element: ElementRef) {
    this.appear = new EventEmitter<boolean>();
  }

  saveDimensions() {
    this.elementPos = this.getOffsetTop(this.element.nativeElement);
    this.elementHeight = this.element.nativeElement.offsetHeight;
    this.windowHeight = window.innerHeight;
  }

  saveScrollPos() {
    this.scrollPos = window.scrollY;
  }

  getOffsetTop(element: any) {
    let offsetTop = element.offsetTop || 0;
    if (element.offsetParent) {
      offsetTop += this.getOffsetTop(element.offsetParent);
    }
    return offsetTop;
  }

  checkVisibility() {
    if (this.isVisible()) {
      this.saveDimensions();
      if (this.isVisible()) {
        this.appear.emit(true);
      } else {
        this.appear.emit(false);
      }
    } else {
      this.appear.emit(false);
    }
  }

  isVisible() {
    return (
      // (this.scrollPos >= this.elementPos &&
      //   this.scrollPos <= this.elementPos + this.elementHeight) ||
      this.scrollPos + this.windowHeight >=
        this.elementPos + this.elementHeight / 2 &&
      this.scrollPos <= this.elementPos + this.elementHeight - 100
    );
  }

  subscribe() {
    this.subscriptionScroll = fromEvent(window, 'scroll').subscribe(() => {
      this.saveScrollPos();
      this.saveDimensions();
      this.checkVisibility();
    });
    this.subscriptionResize = fromEvent(window, 'resize').subscribe(() => {
      this.saveDimensions();
      this.checkVisibility();
    });
  }
  unsubscribe() {
    if (this.subscriptionScroll) {
      this.subscriptionScroll.unsubscribe();
    }
    if (this.subscriptionResize) {
      this.subscriptionResize.unsubscribe();
    }
  }

  ngAfterViewInit() {
    this.subscribe();
  }
  ngOnDestroy() {
    this.unsubscribe();
  }
}
