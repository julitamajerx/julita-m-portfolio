import { Component, inject } from '@angular/core';
import { FrameService } from './frame-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-frame',
  imports: [RouterLink],
  templateUrl: './frame.html',
  styleUrl: './frame.scss',
})
export class Frame {
  protected frameService = inject(FrameService);
}
