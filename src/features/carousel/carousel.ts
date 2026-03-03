import { Component, input } from '@angular/core';
import { CarouselItem } from '../../shared/interface/carousel-interface';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
  host: {
    '[style.width.px]': 'width() + 20',
    '[style.max-width.px]': 'width() + 20',
  },
})
export class Carousel {
  public items = input<CarouselItem[]>([]);
  public width = input<string>('400px');

  protected next() {
    const currentItems = this.items();

    if (currentItems.length > 0) {
      const first = currentItems.shift();
      if (first) currentItems.push(first);
    }
  }

  protected prev() {
    const currentItems = this.items();

    if (currentItems.length > 0) {
      const last = currentItems.pop();
      if (last) currentItems.unshift(last);
    }
  }
}
