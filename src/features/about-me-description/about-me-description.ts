import { Component } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-about-me-description',
  imports: [ProjectCard],
  templateUrl: './about-me-description.html',
  styleUrl: './about-me-description.scss',
})
export class AboutMeDescription {}
