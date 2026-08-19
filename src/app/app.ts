import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { THEMES, DATA_ATTRIBUTE_THEME, type ThemeType } from './shared';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Docs Stats AI');

  theme = signal<ThemeType>(THEMES.DARK);

  applyTheme(theme: ThemeType) {
    const root = this.document.documentElement;

    if (theme === THEMES.DARK) {
      root.setAttribute(DATA_ATTRIBUTE_THEME, THEMES.DARK);
    } else {
      root.removeAttribute(DATA_ATTRIBUTE_THEME);
    }
  }

  toggleTheme = () => {
    const next = this.theme() === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    this.theme.set(next);
    this.applyTheme(next);
  };
}
