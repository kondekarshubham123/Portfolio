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
          <div class="paper-card snap-start shrink-0 w-72 p-5
                      flex flex-col gap-3
                      hover:shadow-lg hover:-translate-y-1 transition">
            <!-- Title -->
            <h3 class="font-nunito font-semibold text-base text-accent line-clamp-2">
              {{ item.title }}
            </h3>
            
            <!-- Detail text with line clamping -->
            <p class="font-nunito text-sm text-muted line-clamp-3 flex-grow">
              {{ item.detail }}
            </p>
            
            <!-- Links if available -->
            @if (item.links && item.links.length > 0) {
              <div class="flex flex-wrap gap-2 pt-2 border-t border-border-soft">
                @for (link of item.links; track link.label) {
                  <a 
                    [href]="link.url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="font-nunito text-xs font-semibold px-3 py-2 rounded 
                           bg-primary/10 text-primary hover:bg-primary hover:text-white 
                           transition duration-200 inline-flex items-center gap-1">
                    {{ link.label }}
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                }
              </div>
            }
            
            <!-- Year badge -->
            <span class="font-nunito text-xs font-bold px-3 py-1.5 rounded-full
                         bg-primary-light text-primary w-fit">
              {{ item.year }}
            </span>
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
