import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  OnInit,
} from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[selected]',
})
export class HeaderDirective implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    // this.renderer.addClass(this.el.nativeElement, 'nav-btn');
  }

  @HostListener('click')
  changeBackground(): void {
    const allElements = document.querySelectorAll('.selected');
    allElements.forEach((btn) => {
      this.renderer.removeClass(btn, 'selected');
    });
    this.renderer.addClass(this.el.nativeElement, 'selected');
  }
}
