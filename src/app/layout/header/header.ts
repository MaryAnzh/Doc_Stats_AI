import { Component, input, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import type { ThemeType } from '../../shared';
import { THEMES } from '../../shared';
import { LogoComponent } from '../../shared/ui';
const { LIGHT, DARK } = THEMES;

@Component({
  selector: 'app-header',
  imports: [LogoComponent],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header.scss',
})
export class HeaderComponent {
  private router = inject(Router);

  readonly theme = input<ThemeType>();
  readonly toggleTheme = input<() => void>();

  lightTheme = LIGHT;
  darkTheme = DARK;

  handleTheme() {
    this.toggleTheme()?.();
  }
}
