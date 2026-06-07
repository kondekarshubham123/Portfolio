import { Component } from '@angular/core';
import { SectionTitle } from '../section-title/section-title';
import { PROFILE, SOCIALS } from '../../portfolio-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionTitle],
  template: `
    <section id="contact" class="py-20 px-6 md:px-12 max-w-5xl mx-auto">
      <app-section-title title="Contact" />

      <div class="bg-accent rounded-3xl p-6 sm:p-10 md:p-14 text-center text-white">
        <h3 class="font-caveat font-bold text-5xl md:text-6xl mb-3">Let's work together</h3>
        <p class="font-nunito text-white/70 max-w-xl mx-auto mb-8">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
        <a
          [href]="'mailto:' + profile.email"
          class="inline-flex items-center justify-center gap-2 max-w-full
                 px-5 sm:px-8 py-3 sm:py-3.5 rounded-full bg-primary font-nunito font-bold
                 text-sm sm:text-base break-all
                 shadow-lg shadow-primary/30 hover:-translate-y-0.5 transition"
        >
          <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 8l9 6 9-6M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
          </svg>
          {{ profile.email }}
        </a>

        <div class="flex items-center justify-center gap-5 mt-10">
          @for (s of socials; track s.label) {
            <a
              [href]="s.url"
              target="_blank"
              rel="noopener"
              [attr.aria-label]="s.label"
              class="text-white/60 hover:text-primary transition"
            >
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path [attr.d]="s.icon" />
              </svg>
            </a>
          }
        </div>
      </div>

      <p class="text-center font-nunito text-muted text-sm mt-10">
        © {{ year }} {{ profile.name }}. Built with Angular &amp; Tailwind CSS.
      </p>
    </section>
  `,
})
export class Contact {
  readonly profile = PROFILE;
  readonly socials = SOCIALS;
  readonly year = new Date().getFullYear();
}
