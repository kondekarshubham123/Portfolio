import { Component } from '@angular/core';
import { SectionTitle } from '../section-title/section-title';
import { EXTRA_CURRICULAR } from '../../portfolio-data';

@Component({
  selector: 'app-extra-curricular',
  standalone: true,
  imports: [SectionTitle],
  template: `
    <section id="extra-curricular" class="py-20 max-w-6xl mx-auto">
      <div class="px-6 md:px-12 flex items-center justify-between gap-4">
        <app-section-title title="Extra Curricular" />

        <!-- scroll arrows (desktop) -->
        <div class="hidden sm:flex gap-2 mb-10 md:mb-14 shrink-0">
          <button
            type="button"
            aria-label="Scroll left"
            (click)="scroller.scrollBy({ left: -320, behavior: 'smooth' })"
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
            (click)="scroller.scrollBy({ left: 320, behavior: 'smooth' })"
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
        class="no-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory
               px-6 md:px-12 scroll-px-6 md:scroll-px-12 pt-2 pb-8 scroll-smooth"
      >
        @for (item of items; track item.title) {
          <div class="paper-card snap-start shrink-0 w-64 p-5
                      flex flex-col justify-between gap-4
                      hover:shadow-lg hover:-translate-y-1 transition">
            <h3 class="font-nunito font-semibold text-base text-accent">{{ item.title }}</h3>
            <div class="flex items-center justify-between">
              <p class="font-nunito text-sm text-muted">{{ item.detail }}</p>
              <span class="font-nunito text-xs font-bold px-2.5 py-1 rounded-full
                           bg-primary-light text-primary shrink-0">
                {{ item.year }}
              </span>
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
export class ExtraCurricular {
  readonly items = EXTRA_CURRICULAR;
}
