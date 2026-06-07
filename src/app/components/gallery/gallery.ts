import { Component } from '@angular/core';
import { SectionTitle } from '../section-title/section-title';
import { GALLERY } from '../../portfolio-data';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [SectionTitle],
  template: `
    <section id="gallery" class="py-20 max-w-6xl mx-auto">
      <div class="px-6 md:px-12 flex items-center justify-between gap-4">
        <app-section-title title="Gallery" />

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

      <!-- horizontal scroller -->
      <div
        #scroller
        class="no-scrollbar flex gap-8 overflow-x-auto snap-x snap-mandatory
               px-6 md:px-12 scroll-px-6 md:scroll-px-12 pt-4 pb-8 scroll-smooth"
      >
        @for (photo of gallery; track photo.src) {
          <figure class="polaroid snap-center shrink-0 w-64 md:w-72 rounded-sm">
            <img
              [src]="photo.src"
              [alt]="photo.caption"
              class="w-full h-44 md:h-48 object-cover rounded-sm"
              loading="lazy"
            />
            <figcaption
              class="font-caveat text-2xl text-center text-accent absolute bottom-2 inset-x-0"
            >
              {{ photo.caption }}
            </figcaption>
          </figure>
        }
      </div>

      <p class="px-6 md:px-12 font-kalam text-muted text-sm mt-1">
        ← swipe / drag to see more →
      </p>
    </section>
  `,
})
export class Gallery {
  readonly gallery = GALLERY;
}
