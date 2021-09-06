import { SharedService } from '../shared/services/shared.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit, AfterViewInit {
  constructor(private shared: SharedService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.shared.loading.next(false);
  }
}
