import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  @Output() onClick: EventEmitter<string> = new EventEmitter();
  @Input() image!: string;
}
