import { Component } from '@angular/core';
import { ProjectCard } from '../../project-card/project-card';

@Component({
  selector: 'app-fullstack',
  imports: [ProjectCard],
  templateUrl: './fullstack.html',
  styleUrl: './fullstack.scss',
})
export class Fullstack {}
