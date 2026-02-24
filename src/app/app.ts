import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Frame } from '../features/frame/frame';
import { FrameService } from '../features/frame/frame-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Frame],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Portfolio Julita Majer');
  protected frameService = inject(FrameService);
}
