import { Component, Input } from '@angular/core';

/**
 * Big outlined "stroke" heading used at the top of every section,
 * mirroring the look of the reference portfolio site.
 */
@Component({
  selector: 'app-section-title',
  standalone: true,
  template: `
    <div class="mb-10 md:mb-14 flex items-end gap-3">
      <span class="font-kalam text-primary/40 text-2xl md:text-3xl select-none">#</span>
      <h2 class="notebook-title text-5xl sm:text-6xl md:text-7xl">
        {{ title }}
      </h2>
    </div>
  `,
})
export class SectionTitle {
  @Input() title = '';
}
