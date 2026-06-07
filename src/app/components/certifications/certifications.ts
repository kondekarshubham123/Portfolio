import { Component } from '@angular/core';
import { SectionTitle } from '../section-title/section-title';
import { CERTIFICATIONS, CERT_PROFILES } from '../../portfolio-data';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [SectionTitle],
  template: `
    <section id="certifications" class="py-20 max-w-6xl mx-auto">
      <div class="px-6 md:px-12 flex items-center justify-between gap-4">
        <app-section-title title="Certifications" />

        <!-- scroll arrows (desktop) -->
        <div class="hidden sm:flex gap-2 mb-10 md:mb-14 shrink-0">
          <button
            type="button"
            aria-label="Scroll left"
            (click)="scroller.scrollBy({ left: -360, behavior: 'smooth' })"
            class="w-11 h-11 rounded-full bg-surface border border-border-soft text-primary
                   shadow-sm hover:bg-primary hover:text-white transition flex items-center justify-center"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            (click)="scroller.scrollBy({ left: 360, behavior: 'smooth' })"
            class="w-11 h-11 rounded-full bg-surface border border-border-soft text-primary
                   shadow-sm hover:bg-primary hover:text-white transition flex items-center justify-center"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- horizontal scroller: 2 rows, columns flow sideways -->
      <div
        #scroller
        class="no-scrollbar overflow-x-auto snap-x snap-mandatory px-6 md:px-12 scroll-px-6 md:scroll-px-12 pt-2 pb-8 scroll-smooth"
      >
        <div class="grid grid-rows-2 grid-flow-col auto-cols-[18rem] gap-5">
          @for (cert of certifications; track cert.name) {
            <a
              [href]="cert.link || '#'"
              target="_blank"
              rel="noopener"
              class="group paper-card snap-start p-4 flex items-center gap-4
                     hover:shadow-lg hover:-translate-y-1 transition"
            >
              <!-- badge / logo -->
              <img
                [src]="cert.image"
                [alt]="cert.issuer"
                class="w-14 h-14 rounded-lg object-contain bg-white border border-border-soft shrink-0 p-2.5"
                loading="lazy"
              />

              <div class="min-w-0">
                <h3 class="font-nunito font-semibold text-sm text-accent leading-snug
                           group-hover:text-primary transition line-clamp-2">
                  {{ cert.name }}
                </h3>
                <p class="font-nunito text-xs text-muted mt-1">
                  {{ cert.issuer }} · {{ cert.year }}
                </p>
              </div>
            </a>
          }
        </div>
      </div>

      <div class="px-6 md:px-12 flex flex-wrap items-center justify-between gap-3 mt-1">
        <p class="font-kalam text-muted text-sm">← swipe / drag to see more →</p>

        <div class="flex flex-wrap gap-2">
          @for (p of profiles; track p.label) {
            <a
              [href]="p.url"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                     border border-border-soft bg-surface text-primary
                     font-nunito text-xs font-bold hover:bg-primary hover:text-white transition"
            >
              {{ p.label }}
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
          }
        </div>
      </div>
    </section>
  `,
})
export class Certifications {
  readonly certifications = CERTIFICATIONS;
  readonly profiles = CERT_PROFILES;
}
