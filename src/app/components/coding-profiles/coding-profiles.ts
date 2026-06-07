import { Component } from '@angular/core';
import { SectionTitle } from '../section-title/section-title';
import { CODING_PROFILES } from '../../portfolio-data';

@Component({
  selector: 'app-coding-profiles',
  standalone: true,
  imports: [SectionTitle],
  template: `
    <section id="coding-profiles" class="py-20 px-6 md:px-12 max-w-5xl mx-auto">
      <app-section-title title="Coding Profiles" />

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        @for (profile of profiles; track profile.platform) {
          <a
            [href]="profile.url"
            target="_blank"
            rel="noopener"
            class="group paper-card p-6 flex flex-col items-center text-center
                   hover:shadow-lg hover:-translate-y-1 transition"
          >
            <span
              class="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 overflow-hidden
                     ring-4 transition group-hover:scale-110"
              [style.background]="profile.color"
              [style.--tw-ring-color]="profile.color + '33'"
            >
              <img
                [src]="profile.image"
                [alt]="profile.platform"
                class="w-full h-full object-contain p-3.5"
                loading="lazy"
              />
            </span>

            <h3 class="font-nunito font-bold text-accent group-hover:text-primary transition">
              {{ profile.platform }}
            </h3>
            <p class="font-nunito text-sm text-muted">{{ profile.handle }}</p>
            <span
              class="mt-3 font-nunito text-xs font-semibold px-3 py-1 rounded-full
                     bg-primary-light text-primary"
            >
              {{ profile.stat }}
            </span>
          </a>
        }
      </div>
    </section>
  `,
})
export class CodingProfiles {
  readonly profiles = CODING_PROFILES;
}
