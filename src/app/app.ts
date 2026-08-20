import { Component, DOCUMENT, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { THEMES, DATA_ATTRIBUTE_THEME, type ThemeType } from './shared';
import { Header } from "./layout/header/header";

const { DARK, LIGHT } = THEMES;

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private document = inject(DOCUMENT);

  protected readonly title = signal('Docs Stats AI');

  public theme = signal<ThemeType>(DARK);
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
