import { Component, HostListener, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.TabletPortrait + ', ' + Breakpoints.HandsetPortrait)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  headercolor = true;
  private scrollOffset: number = 200;
  constructor(private breakpointObserver: BreakpointObserver) {}
  @HostListener('window:scroll', ['$event']) onWindowScroll() {
    this.headercolor = !(
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0) > this.scrollOffset
    );
  }
}
