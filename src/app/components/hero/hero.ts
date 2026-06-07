import { Component } from '@angular/core';
import { PROFILE, SOCIALS } from '../../portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section
      id="about"
      class="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div class="max-w-3xl text-center">
        <img
          [src]="profile.photo"
          [alt]="profile.name"
          class="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover mx-auto
                 ring-8 ring-primary/15 shadow-xl mb-8"
        />
        <p class="font-kalam text-margin font-bold tracking-wide text-lg mb-1">
          Hello, I'm
        </p>
        <h1 class="font-caveat font-bold text-7xl sm:text-8xl md:text-9xl text-accent leading-none mb-3">
          {{ profile.name }}
        </h1>
        <h2 class="font-nunito font-bold text-lg md:text-xl text-primary uppercase tracking-widest mb-6">
          {{ profile.title }}
        </h2>
        <p class="font-nunito text-muted text-lg leading-relaxed max-w-xl mx-auto mb-10">
          {{ profile.tagline }}
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            class="px-7 py-3 rounded-full bg-primary text-white font-nunito font-bold
                   shadow-lg shadow-primary/30 hover:-translate-y-0.5 transition"
          >
            Get in touch
          </a>
          <a
            [href]="profile.resume"
            download
            class="px-7 py-3 rounded-full bg-accent text-white font-nunito font-bold
                   shadow-lg hover:-translate-y-0.5 transition flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
            </svg>
            Download CV
          </a>
          <a
            href="#projects"
            class="px-7 py-3 rounded-full border-2 border-primary text-primary
                   font-nunito font-bold hover:bg-primary hover:text-white transition"
          >
            View work
          </a>
        </div>

        <div class="flex items-center justify-center gap-5 mt-10">
          @for (s of socials; track s.label) {
            <a
              [href]="s.url"
              target="_blank"
              rel="noopener"
              [attr.aria-label]="s.label"
              class="text-muted hover:text-primary transition"
            >
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path [attr.d]="s.icon" />
              </svg>
            </a>
          }
        </div>
      </div>
    </section>
  `,
})
export class Hero {
  readonly profile = PROFILE;
  readonly socials = SOCIALS;
}
