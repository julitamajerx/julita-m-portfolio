import { Component } from '@angular/core';
import { ProjectCard } from '../../project-card/project-card';
import { Carousel } from '../../carousel/carousel';

@Component({
  selector: 'app-other',
  imports: [ProjectCard, Carousel],
  templateUrl: './other.html',
  styleUrl: './other.scss',
})
export class Other {
  protected seoSlides = [
    { image: 'seo.png', description: 'Wersja mobilna.' },
    { image: 'seo2.png', description: 'Wersja desktopowa.' },
  ];

  protected invoiceSlides = [
    { image: 'invoice.png', description: 'Ekran główny.' },
    { image: 'invoice2.png', description: 'Logowanie.' },
    { image: 'invoice3.png', description: 'Wybór kontrahentów.' },
    { image: 'invoice4.png', description: 'Tworzenie faktury.' },
    { image: 'invoice5.png', description: 'Lista faktur.' },
  ];

  protected bloggerSlides = [
    { image: 'blogger.png', description: 'Ekran główny.' },
    { image: 'blogger2.png', description: 'Dodawanie postu.' },
  ];

  protected winFromSlides = [
    { image: 'winform.png', description: 'Lista faktur.' },
    { image: 'winform2.png', description: 'Tworzenie faktury.' },
    { image: 'winform3.png', description: 'Wygenerowana faktura.' },
  ];
}
