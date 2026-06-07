import { Component } from '@angular/core';
import { SectionTitle } from '../section-title/section-title';
import { SKILLS } from '../../portfolio-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionTitle],
  template: `
    <section id="skills" class="py-20 max-w-6xl mx-auto">
      <div class="px-6 md:px-12 flex items-center justify-between gap-4">
        <app-section-title title="Skills" />

        <!-- scroll arrows (desktop) -->
        <div class="hidden sm:flex gap-2 mb-10 md:mb-14 shrink-0">
          <button
            type="button"
            aria-label="Scroll left"
            (click)="scroller.scrollBy({ left: -340, behavior: 'smooth' })"
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
            (click)="scroller.scrollBy({ left: 340, behavior: 'smooth' })"
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
        @for (group of skills; track group.category) {
          <div class="paper-card snap-start shrink-0 w-72 p-6">
            <h3 class="font-nunito font-semibold text-lg text-primary mb-4">
              {{ group.category }}
            </h3>
            <div class="flex flex-wrap gap-2">
              @for (item of group.items; track item.name) {
                <span class="font-nunito text-sm font-semibold px-3 py-1.5 rounded-lg
                             bg-canvas border border-border-soft text-accent
                             inline-flex items-center gap-2">
                  <img
                    [src]="item.icon"
                    [alt]="item.name"
                    class="w-4 h-4 object-contain"
                    loading="lazy"
                  />
                  {{ item.name }}
                </span>
              }
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
export class Skills {
  readonly skills = SKILLS;
}
