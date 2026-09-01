import { Injectable, signal, computed, inject, DOCUMENT } from '@angular/core';
import { DARK, DATA_ATTRIBUTE_THEME, LIGHT, ThemeType } from '../../shared';
import { AppService } from '../service/app-service';

@Injectable({ providedIn: 'root' })
export class AppStore {
  private appService = inject(AppService);

  private document = inject(DOCUMENT);
  readonly theme = signal<ThemeType>(DARK);
  readonly isServerHealth = signal<boolean>(true);

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
    this.serverHealth();
  }

  serverHealth() {
    this.appService.health().subscribe((isHealth) => {
      console.log(`isHealth: ${isHealth}`);
      this.isServerHealth.set(isHealth);
    });
  }
}
