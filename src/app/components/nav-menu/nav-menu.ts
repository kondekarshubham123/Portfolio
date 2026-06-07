import { Component, HostListener, signal } from '@angular/core';
import { NAV_ITEMS, SOCIALS, PROFILE } from '../../portfolio-data';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  templateUrl: './nav-menu.html',
  styles: [
    `
      /* Mobile: drawer hidden by default, shown when .open */
      .site-nav { transform: translateX(-100%); }
      .site-nav.open { transform: translateX(0); }

      /* Desktop: sidebar stays pinned and always visible (no auto-hide,
         so the content's left margin never leaves an empty gap). */
      @media (min-width: 1024px) {
        .site-nav { transform: translateX(0) !important; }
      }

      /* Mobile top bar slides up when hidden */
      .bar-hidden { transform: translateY(-100%); }
    `,
  ],
})
export class NavMenu {
  readonly navItems = NAV_ITEMS;
  readonly socials = SOCIALS;
  readonly profile = PROFILE;

  /** Mobile drawer open/closed state */
  readonly menuOpen = signal(false);

  /** Whether the nav is auto-hidden (scrolling down) */
  readonly hidden = signal(false);

  private lastScrollY = 0;

  @HostListener('window:scroll')
  onScroll(): void {
    const y = window.scrollY;

    if (y < 80) {
      // Always show near the top
      this.hidden.set(false);
    } else if (y > this.lastScrollY + 6) {
      // Scrolling down
      this.hidden.set(true);
    } else if (y < this.lastScrollY - 6) {
      // Scrolling up
      this.hidden.set(false);
    }

    this.lastScrollY = y;
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
