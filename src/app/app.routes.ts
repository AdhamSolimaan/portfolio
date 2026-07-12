import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { CvComponent } from './cv/cv.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: 'Home' } },
  { path: 'about', component: AboutComponent, data: { animation: 'About' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'Projects' } },
  { path: 'skills', component: SkillsComponent, data: { animation: 'Skills' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'Contact' } },
  { path: 'cv', component: CvComponent, data: { animation: 'Cv' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
