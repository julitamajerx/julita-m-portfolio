import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  public imgName = input('');
  public role = input('');
  public group = input('');
  public time = input('');
  public tech = input('');
}
