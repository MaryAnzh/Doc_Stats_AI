import { Component, input, inject, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { Router } from '@angular/router';

import type { ThemeType } from '../../shared';
import { APP_ROUTES, THEMES } from '../../shared';
import { LogoComponent, ButtonComponent } from '../../shared/ui';
const { LIGHT, DARK } = THEMES;

@Component({
  selector: 'app-header',
  imports: [LogoComponent, ButtonComponent],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header.scss',
})
export class HeaderComponent {
  private router = inject(Router);
  readonly isLoginPage = computed(() => this.router.url === `/${APP_ROUTES.AUTH_LOGIN}`);

  readonly theme = input<ThemeType>();
  readonly toggleTheme = input<() => void>();

  lightTheme = LIGHT;
  darkTheme = DARK;

  handleTheme() {
    this.toggleTheme()?.();
  }
}
