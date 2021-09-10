import { SharedService } from '../shared/services/shared.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit, AfterViewInit {
  loading = true
  constructor(private shared: SharedService) {
    shared.loading.pipe(delay(2)).subscribe(val => {
      this.loading = val;
    })
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    // this.shared.loading.next(false);
  }
}
