import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {}
