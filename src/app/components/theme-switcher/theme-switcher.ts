import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';

interface Theme {
  name: string;
  swatch: string; // colour shown on the picker dot
  vars: Record<string, string>;
}

/** Notebook-friendly palettes. Each overrides the Tailwind v4 theme tokens. */
const THEMES: Theme[] = [
  {
    name: 'Ink',
    swatch: 'hsl(222, 47%, 30%)',
    vars: {
      '--color-primary': 'hsl(222, 47%, 30%)',
      '--color-primary-light': 'hsl(48, 96%, 76%)',
      '--color-accent': 'hsl(222, 47%, 14%)',
      '--color-margin': 'hsl(0, 72%, 72%)',
      '--color-rule': 'hsl(205, 65%, 86%)',
    },
  },
  {
    name: 'Forest',
    swatch: 'hsl(150, 55%, 30%)',
    vars: {
      '--color-primary': 'hsl(150, 55%, 28%)',
      '--color-primary-light': 'hsl(78, 80%, 78%)',
      '--color-accent': 'hsl(155, 45%, 12%)',
      '--color-margin': 'hsl(8, 72%, 70%)',
      '--color-rule': 'hsl(150, 40%, 85%)',
    },
  },
  {
    name: 'Berry',
    swatch: 'hsl(330, 60%, 45%)',
    vars: {
      '--color-primary': 'hsl(330, 58%, 42%)',
      '--color-primary-light': 'hsl(322, 90%, 86%)',
      '--color-accent': 'hsl(315, 45%, 16%)',
      '--color-margin': 'hsl(265, 60%, 72%)',
      '--color-rule': 'hsl(325, 55%, 90%)',
    },
  },
  {
    name: 'Sunset',
    swatch: 'hsl(20, 80%, 48%)',
    vars: {
      '--color-primary': 'hsl(20, 78%, 44%)',
      '--color-primary-light': 'hsl(42, 96%, 75%)',
      '--color-accent': 'hsl(20, 45%, 15%)',
      '--color-margin': 'hsl(0, 75%, 70%)',
      '--color-rule': 'hsl(30, 70%, 88%)',
    },
  },
];

interface StyleMode {
  name: string;
  label: string;
  emoji: string;
  className: string; // class applied to <html>
}

const STYLES: StyleMode[] = [
  { name: 'notebook', label: 'Notebook', emoji: '📓', className: 'style-notebook' },
  { name: 'cartoon', label: 'Cartoon', emoji: '💥', className: 'style-cartoon' },
  { name: 'anime', label: 'Anime', emoji: '🌸', className: 'style-anime' },
];

const STORAGE_KEY = 'portfolio-theme';
const STYLE_KEY = 'portfolio-style';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  template: `
    <div class="fixed bottom-5 right-5 z-[60] flex items-center gap-3">
      <!-- picker panel -->
      @if (open()) {
        <div class="paper-card !border-l px-4 py-3 flex flex-col gap-3">
          <!-- style modes -->
          <div>
            <p class="font-nunito text-[11px] font-bold uppercase tracking-wider text-muted mb-1.5">
              Style
            </p>
            <div class="flex gap-1.5">
              @for (style of styles; track style.name) {
                <button
                  type="button"
                  [title]="style.label"
                  (click)="applyStyle(style)"
                  class="px-2.5 py-1.5 rounded-lg text-sm font-nunito font-bold border-2 transition
                         flex items-center gap-1.5 hover:scale-105"
                  [class.border-accent]="activeStyle() === style.name"
                  [class.bg-primary-light]="activeStyle() === style.name"
                  [class.border-transparent]="activeStyle() !== style.name"
                  [class.text-muted]="activeStyle() !== style.name"
                >
                  <span>{{ style.emoji }}</span>
                  <span class="hidden sm:inline">{{ style.label }}</span>
                </button>
              }
            </div>
          </div>

          <!-- colour swatches -->
          <div>
            <p class="font-nunito text-[11px] font-bold uppercase tracking-wider text-muted mb-1.5">
              Colour
            </p>
            <div class="flex items-center gap-2">
              @for (theme of themes; track theme.name) {
                <button
                  type="button"
                  [attr.aria-label]="theme.name + ' theme'"
                  [title]="theme.name"
                  (click)="apply(theme)"
                  class="w-7 h-7 rounded-full border-2 transition hover:scale-110"
                  [style.background]="theme.swatch"
                  [class.border-accent]="active() === theme.name"
                  [class.border-transparent]="active() !== theme.name"
                ></button>
              }
            </div>
          </div>
        </div>
      }

      <!-- toggle button -->
      <button
        type="button"
        aria-label="Change colour theme"
        (click)="toggle()"
        class="w-14 h-14 rounded-full bg-accent text-white shadow-lg
               flex items-center justify-center hover:scale-105 transition"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 3a9 9 0 1 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.39-.61-.39-1 0-.83.67-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8z" />
          <circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="12" cy="8" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="16.5" cy="11.5" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      </button>
    </div>
  `,
})
export class ThemeSwitcher {
  readonly themes = THEMES;
  readonly styles = STYLES;
  readonly open = signal(false);
  readonly active = signal(THEMES[0].name);
  readonly activeStyle = signal(STYLES[0].name);

  private readonly host = inject(ElementRef<HTMLElement>);

  /** Close the panel when clicking anywhere outside this component. */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.open() && !this.host.nativeElement.contains(event.target)) {
      this.open.set(false);
    }
  }

  /** Close on Escape too. */
  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.open.set(false);
  }

  constructor() {
    const savedTheme = THEMES.find((t) => t.name === localStorage.getItem(STORAGE_KEY));
    if (savedTheme) {
      this.apply(savedTheme);
    }
    const savedStyle = STYLES.find((s) => s.name === localStorage.getItem(STYLE_KEY));
    this.applyStyle(savedStyle ?? STYLES[0]);
  }

  toggle(): void {
    this.open.update((v) => !v);
  }

  apply(theme: Theme): void {
    const root = document.documentElement;
    for (const [key, value] of Object.entries(theme.vars)) {
      root.style.setProperty(key, value);
    }
    this.active.set(theme.name);
    localStorage.setItem(STORAGE_KEY, theme.name);
  }

  applyStyle(style: StyleMode): void {
    const root = document.documentElement;
    root.classList.remove(...STYLES.map((s) => s.className));
    root.classList.add(style.className);
    this.activeStyle.set(style.name);
    localStorage.setItem(STYLE_KEY, style.name);
  }
}
