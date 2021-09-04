import { SharedService } from './services/shared.service';
import { Component, HostListener } from '@angular/core';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RealEstate';
  loading = true;

  constructor(private router: Router, private shared: SharedService) {
    this.router.events.subscribe((e: RouterEvent) => {
      this.navigationInterceptor(e);
    });
    this.shared.loading.subscribe((val) => {
      this.loading = val;
    });
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.shared.loading.next(true);
    }
    if (event instanceof NavigationEnd) {
      this.shared.loading.next(false);
    }
    if (event instanceof NavigationCancel) {
      this.shared.loading.next(false);
    }
    if (event instanceof NavigationError) {
      this.shared.loading.next(false);
    }
  }
}
