import { Component } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { Carousel } from '../carousel/carousel';

@Component({
  selector: 'app-about-me-description',
  imports: [ProjectCard, Carousel],
  templateUrl: './about-me-description.html',
  styleUrl: './about-me-description.scss',
})
export class AboutMeDescription {
  protected materDeiSlides = [
    { image: 'mater4.png', description: 'Sprite sheet postaci.' },
    { image: 'mater2.png', description: 'Główny bohater - szkic.' },
    { image: 'mater3.jpg', description: 'Przeciwnicy - szkic.' },
    { image: 'mater3.png', description: 'Sprite sheet przedmiotów.' },
  ];
  protected tamagotchiDeiSlides = [
    { image: 'tamagotchi2.png', description: 'Animacja snu.' },
    { image: 'tamagotchi3.png', description: 'Wykrycie procesu VS Code.' },
    { image: 'tamagotchi4.png', description: 'Wykrycie procesu Blender.' },
  ];
  protected designSlides = [
    { image: 'design.png', description: 'Projekt logo i cennika dla firmy beauty.' },
    { image: 'design2.png', description: 'Projekt logo i wizytówki dla firmy beauty.' },
    { image: 'design3.png', description: 'Projekt logo na potrzeby game jamu.' },
    { image: 'design4.png', description: 'Projekt logo dla programisty.' },
    { image: 'design5.png', description: 'Todo - makieta Figma.' },
    { image: 'design6.png', description: 'Todo - faktyczny projekt.' },
    { image: 'design7.png', description: 'Strona internetowa dla fryzjera - makieta Figma.' },
    { image: 'design8.png', description: 'Strona internetowa dla fryzjera - faktyczny projekt.' },
    { image: 'design9.png', description: 'Strona internetowa dla fryzjera - faktyczny projekt.' },
    { image: 'design10.png', description: 'Strona internetowa dla fryzjera - faktyczny projekt.' },
    {
      image: 'design11.png',
      description: 'Logo na potrzeby budowania marki, inspiracja Poznaniem.',
    },
  ];
}
