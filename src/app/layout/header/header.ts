import { Component, input, inject, ChangeDetectionStrategy, computed } from '@angular/core';
import { Router } from '@angular/router';

import { APP_ROUTES, DARK, LIGHT, type ThemeType } from '../../shared';
import { LogoComponent, ButtonComponent } from '../../shared/ui';
import { AuthStore } from '../../auth/store/auth-store';

@Component({
  selector: 'app-header',
  imports: [LogoComponent, ButtonComponent],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header.scss',
})
export class HeaderComponent {
  private router = inject(Router);
  private authStore = inject(AuthStore);
  readonly isLoginPage = computed(() => this.router.url === `/${APP_ROUTES.AUTH_LOGIN}`);

  readonly theme = input<ThemeType>();
  readonly toggleTheme = input<() => void>();
  readonly isAuth = this.authStore.isAuth;

  lightTheme = LIGHT;
  darkTheme = DARK;

  handleTheme() {
    this.toggleTheme()?.();
  }

  handleLogout() {
    this.authStore.logout();
  }
}
