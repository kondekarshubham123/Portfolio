import { Component } from '@angular/core';
import { SectionTitle } from '../section-title/section-title';
import { EDUCATION } from '../../portfolio-data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [SectionTitle],
  template: `
    <section id="education" class="py-20 px-6 md:px-12 max-w-5xl mx-auto">
      <app-section-title title="Education" />

      <div class="grid gap-6 sm:grid-cols-2">
        @for (edu of education; track edu.degree) {
          <div class="paper-card p-6">
            <span class="font-nunito text-sm text-primary font-bold">{{ edu.period }}</span>
            <h3 class="font-nunito font-semibold text-xl text-accent mt-1 mb-1">
              {{ edu.degree }}
            </h3>
            <p class="font-nunito text-muted font-semibold mb-2">{{ edu.institution }}</p>
            <p class="font-nunito text-muted text-sm">{{ edu.detail }}</p>
          </div>
        }
      </div>
    </section>
  `,
})
export class Education {
  readonly education = EDUCATION;
}
