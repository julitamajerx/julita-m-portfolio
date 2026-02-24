import { Routes } from '@angular/router';
import { AboutMe } from '../features/about-me/about-me';
import { Projects } from '../features/projects/projects';
import { Fullstack } from '../features/projects/fullstack/fullstack';
import { Angularmaterial } from '../features/projects/angularmaterial/angularmaterial';
import { Scss } from '../features/projects/scss/scss';
import { Other } from '../features/projects/other/other';
import { AboutMeDescription } from '../features/about-me-description/about-me-description';
import { CvDownload } from '../features/cv-download/cv-download';
import { Contact } from '../features/contact/contact';

export const routes: Routes = [
  { path: 'profil', component: AboutMe },
  { path: 'o-mnie', component: AboutMeDescription },
  { path: 'cv', component: CvDownload },
  { path: 'kontakt', component: Contact },
  {
    path: 'projekty',
    component: Projects,
    children: [
      { path: '', redirectTo: 'fullstack', pathMatch: 'full' },
      { path: 'fullstack', component: Fullstack },
      { path: 'angular-material', component: Angularmaterial },
      { path: 'scss', component: Scss },
      { path: 'inne', component: Other },
    ],
  },
];
