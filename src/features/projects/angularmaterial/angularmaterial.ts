import { Component } from '@angular/core';
import { ProjectCard } from '../../project-card/project-card';
import { Carousel } from '../../carousel/carousel';

@Component({
  selector: 'app-angularmaterial',
  imports: [ProjectCard, Carousel],
  templateUrl: './angularmaterial.html',
  styleUrl: './angularmaterial.scss',
})
export class Angularmaterial {
  protected nbpSlides = [
    { image: 'nbp2.png', description: 'Kalkulator walut.' },
    { image: 'nbp3.png', description: 'Wersja mobilna.' },
  ];
}
