import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FrameService {
  public isClosed = signal<boolean>(true);
  public isClosing = signal(false);
  public isOpening = signal(false);
  public currentTitle = signal('');

  public closeWindow() {
    this.isClosing.set(true);

    setTimeout(() => {
      this.isClosed.set(true);
      this.isClosing.set(false);
    }, 300);
  }

  public openWindow(title: string) {
    this.isOpening.set(true);

    setTimeout(() => {
      this.isClosed.set(false);
      this.currentTitle.set(title.toUpperCase());
      this.isOpening.set(false);
      this.isClosing.set(false);
    }, 300);
  }
}
