import { Component } from '@angular/core';
import { SectionTitle } from '../section-title/section-title';
import { PROJECTS } from '../../portfolio-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionTitle],
  template: `
    <section id="projects" class="py-20 max-w-6xl mx-auto">
      <div class="px-6 md:px-12 flex items-center justify-between gap-4">
        <app-section-title title="Projects" />

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
        @for (project of projects; track project.title) {
          <div
            class="group paper-card snap-start shrink-0 w-80 overflow-hidden
                   hover:shadow-lg hover:-translate-y-1 transition flex flex-col !p-0"
          >
            <!-- cover image -->
            <div class="h-44 w-full overflow-hidden bg-canvas">
              <img
                [src]="project.image"
                [alt]="project.title"
                class="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                loading="lazy"
              />
            </div>

            <div class="p-5 flex flex-col flex-1">
              <!-- Ranking Badge -->
              @if (project.ranking) {
                <div class="mb-3">
                  <span class="inline-block font-nunito font-bold text-xs px-3 py-1.5 rounded-full 
                               bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 shadow-md">
                    {{ project.ranking }}
                  </span>
                </div>
              }
              
              <div class="flex items-start justify-between mb-2">
                <h3 class="font-nunito font-semibold text-lg text-accent group-hover:text-primary transition">
                  {{ project.title }}
                </h3>
              </div>
              <p class="font-nunito text-muted text-sm mb-4 flex-1">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                @for (tag of project.tags; track tag) {
                  <span class="font-nunito text-xs font-semibold px-3 py-1 rounded-full
                               bg-primary-light text-primary">
                    {{ tag }}
                  </span>
                }
              </div>

              <!-- Project Links -->
              @if (project.links && project.links.length > 0) {
                <div class="flex flex-wrap gap-2 pt-3 border-t border-border-soft">
                  @for (link of project.links; track link.label) {
                    <a
                      [href]="link.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center gap-1 font-nunito text-xs font-semibold px-3 py-2 
                             rounded bg-primary/10 text-primary hover:bg-primary hover:text-white 
                             transition duration-200"
                      title="{{ link.label }}"
                    >
                      {{ link.label }}
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M7 7h10v10" />
                      </svg>
                    </a>
                  }
                </div>
              } @else if (project.link) {
                <div class="pt-3 border-t border-border-soft">
                  <a
                    [href]="project.link || '#'"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-1 font-nunito text-xs font-semibold px-3 py-2 
                           rounded bg-primary/10 text-primary hover:bg-primary hover:text-white 
                           transition duration-200"
                  >
                    View Project
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M7 7h10v10" />
                    </svg>
                  </a>
                </div>
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
export class Projects {
  readonly projects = PROJECTS;
}
