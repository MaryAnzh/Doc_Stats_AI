import { Injectable, signal, computed, inject, DOCUMENT } from '@angular/core';
import { DARK, DATA_ATTRIBUTE_THEME, LIGHT, ThemeType } from '../../shared';

@Injectable({ providedIn: 'root' })
export class AppStore {
  private document = inject(DOCUMENT);
  public readonly theme = signal<ThemeType>(DARK);

  applyTheme(theme: ThemeType) {
    const root = this.document.documentElement;

    if (theme === DARK) {
      root.setAttribute(DATA_ATTRIBUTE_THEME, DARK);
    } else {
      root.removeAttribute(DATA_ATTRIBUTE_THEME);
    }
  }

  toggleTheme = () => {
    const next = this.theme() === LIGHT ? DARK : LIGHT;
    this.theme.set(next);
    this.applyTheme(next);
  };

  initTheme() {
    this.applyTheme(this.theme());
  }
}
