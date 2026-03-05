import { Component } from '@angular/core';
import { ProjectCard } from '../../project-card/project-card';

@Component({
  selector: 'app-scss',
  imports: [ProjectCard],
  templateUrl: './scss.html',
  styleUrl: './scss.scss',
})
export class Scss {}
