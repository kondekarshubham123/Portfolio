import { Component } from '@angular/core';
import { NavMenu } from './components/nav-menu/nav-menu';
import { Hero } from './components/hero/hero';
import { WorkExperience } from './components/work-experience/work-experience';
import { Education } from './components/education/education';
import { Projects } from './components/projects/projects';
import { Gallery } from './components/gallery/gallery';
import { Skills } from './components/skills/skills';
import { CodingProfiles } from './components/coding-profiles/coding-profiles';
import { Certifications } from './components/certifications/certifications';
import { Awards } from './components/awards/awards';
import { ExtraCurricular } from './components/extra-curricular/extra-curricular';
import { Contact } from './components/contact/contact';
import { ThemeSwitcher } from './components/theme-switcher/theme-switcher';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavMenu,
    Hero,
    WorkExperience,
    Education,
    Projects,
    Gallery,
    Skills,
    CodingProfiles,
    Certifications,
    Awards,
    ExtraCurricular,
    Contact,
    ThemeSwitcher,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
