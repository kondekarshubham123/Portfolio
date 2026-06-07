import { Component } from '@angular/core';
import { SectionTitle } from '../section-title/section-title';
import { AWARDS } from '../../portfolio-data';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [SectionTitle],
  template: `
    <section id="awards" class="py-20 max-w-6xl mx-auto">
      <div class="px-6 md:px-12 flex items-center justify-between gap-4">
        <app-section-title title="Awards" />

        <!-- scroll arrows (desktop) -->
        <div class="hidden sm:flex gap-2 mb-10 md:mb-14 shrink-0">
          <button
            type="button"
            aria-label="Scroll left"
            (click)="scroller.scrollBy({ left: -380, behavior: 'smooth' })"
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
            (click)="scroller.scrollBy({ left: 380, behavior: 'smooth' })"
            class="w-11 h-11 rounded-full bg-surface border border-border-soft text-primary
                   shadow-sm hover:bg-primary hover:text-white transition flex items-center justify-center"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- horizontal scroller -->
      <div
        #scroller
        class="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory
               px-6 md:px-12 scroll-px-6 md:scroll-px-12 pt-2 pb-8 scroll-smooth"
      >
        @for (award of awards; track award.title) {
          <div class="group paper-card snap-start shrink-0 w-80 overflow-hidden !p-0
                      hover:shadow-lg hover:-translate-y-1 transition">
            <!-- cover image -->
            <div class="h-44 w-full overflow-hidden bg-canvas">
              <img
                [src]="award.image"
                [alt]="award.title"
                class="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                loading="lazy"
              />
            </div>

            <div class="p-5">
              <h3 class="font-nunito font-semibold text-lg text-accent mb-1">{{ award.title }}</h3>
              <p class="font-nunito text-sm text-primary font-bold mb-2">
                {{ award.issuer }} · {{ award.year }}
              </p>
              <p class="font-nunito text-muted text-sm">{{ award.description }}</p>
            </div>
          </div>
        }
      </div>

      <p class="px-6 md:px-12 font-kalam text-muted text-sm mt-1">
        ← swipe / drag to see more →
      </p>
    </section>
  `,
})
export class Awards {
  readonly awards = AWARDS;
}
