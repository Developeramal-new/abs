import { Slidedetails } from './../../shared/Models/slidedetails';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css'],
})
export class ViewerComponent implements OnInit {
  @Input() slides: Slidedetails[];
  @Input() active: number = 0;
  @Output() close = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.close.emit();
  }
}
