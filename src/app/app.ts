import { Component, DOCUMENT, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { THEMES, DATA_ATTRIBUTE_THEME, type ThemeType } from './shared';
import { HeaderComponent } from './layout/header/header';
import { AppStore } from './core/store/app-store';

const { DARK, LIGHT } = THEMES;

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss',
})
export class AppComponent {
  store = inject(AppStore);

  protected readonly title = signal('Docs Stats AI');

  constructor() {
    this.store.initTheme();
  }
}
