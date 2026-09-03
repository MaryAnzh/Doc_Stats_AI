import { Injectable, signal, computed, inject } from '@angular/core';
import { AuthService } from '../../auth/services/auth-service';
import { LoginType, RegisterType, TokensType } from '../models';
import { TokenService } from '../services/tokenService';
import { Router } from '@angular/router';
import { UserType } from '../../shared/models/user';
import { APP_ROUTES } from '../../shared';

@Injectable({ providedIn: 'root' })
export class AuthStore {
  private auth = inject(AuthService);
  private tokens = inject(TokenService);
  private router = inject(Router);

  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly currentUser = signal<UserType | null>(null);

  readonly isAuth = computed(() => !!this.tokens.getTokens());

  private setLoading() {
    this.loading.set(true);
    this.error.set(null);
  }

  private setAuth(tokens: TokensType) {
    this.tokens.setTokens(tokens);
    this.me();
    this.loading.set(false);
    this.router.navigate(['/']);
  }

  init() {
    this.tokens.loadFromStorage();

    if (this.tokens.getTokens()) {
      this.me();
    }
  }

  login(dto: LoginType) {
    this.setLoading();

    this.auth.login(dto).subscribe({
      next: (tokens) => {
        this.setAuth(tokens);
      },
      error: (err) => {
        this.error.set(err.error?.message ?? 'Login failed');
        this.loading.set(false);
      },
    });
  }

  register(dto: RegisterType) {
    this.setLoading();

    this.auth.register(dto).subscribe({
      next: (tokens) => {
        this.setAuth(tokens);
      },
      error: (err) => {
        this.error.set(err.error?.message ?? 'Registration failed');
        this.loading.set(false);
      },
    });
  }

  me() {
    this.auth.me().subscribe({
      next: (user) => {
        this.currentUser.set(user);
      },
      error: () => {
        this.tokens.clear();
        this.currentUser.set(null);
      },
    });
  }

  logout() {
    this.tokens.clear();
    this.currentUser.set(null);
    this.router.navigate([`/${APP_ROUTES.AUTH_LOGIN}`]);
  }

  clearError() {
    this.error.set(null);
  }
}
