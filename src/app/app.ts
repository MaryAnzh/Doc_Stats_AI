import { Component, DOCUMENT, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { THEMES, DATA_ATTRIBUTE_THEME, type ThemeType } from './shared';
import { HeaderComponent } from './layout/header/header';

const { DARK, LIGHT } = THEMES;

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss',
})
export class AppComponent {
  private document = inject(DOCUMENT);

  protected readonly title = signal('Docs Stats AI');

  public readonly theme = signal<ThemeType>(DARK);

  constructor() {
    this.applyTheme(this.theme());
  }

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
}
