import { Component } from '@angular/core';
import { SectionTitle } from '../section-title/section-title';
import { EXPERIENCES } from '../../portfolio-data';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [SectionTitle],
  template: `
    <section id="work-experience" class="py-20 px-6 md:px-12 max-w-5xl mx-auto">
      <app-section-title title="Experience" />

      <div class="relative border-l-2 border-border-soft ml-3 space-y-10">
        @for (exp of experiences; track exp.role) {
          <div class="relative pl-8">
            <span
              class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary
                     ring-4 ring-canvas"
            ></span>
            <div class="paper-card p-6">
              <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h3 class="font-nunito font-semibold text-xl text-accent">{{ exp.role }}</h3>
                <span class="font-nunito text-sm text-primary font-bold">{{ exp.period }}</span>
              </div>
              <p class="font-nunito text-muted font-semibold mb-3">
                {{ exp.company }} · {{ exp.location }}
              </p>
              <ul class="list-disc list-inside space-y-1 font-nunito text-muted">
                @for (point of exp.points; track point) {
                  <li>{{ point }}</li>
                }
              </ul>
            </div>
          </div>
        }
      </div>
    </section>
  `,
})
export class WorkExperience {
  readonly experiences = EXPERIENCES;
}
