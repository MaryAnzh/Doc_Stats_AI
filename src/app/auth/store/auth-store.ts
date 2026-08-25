import { Injectable, signal, computed, inject } from '@angular/core';
import { AuthService } from '../../auth/services/auth-service';
import { LoginType, RegisterType, TokenType } from '../models';
import { TokenService } from '../services/tokenService';

@Injectable({ providedIn: 'root' })
export class AuthStore {
  private auth = inject(AuthService);
  private tokens = inject(TokenService);

  readonly isAuth = computed(() => !!this.tokens.getTokens());
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  login(dto: LoginType) {
    this.loading.set(true);
    this.error.set(null);

    this.auth.login(dto).subscribe({
      next: (tokens) => {
        this.tokens.setTokens(tokens);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.error?.message ?? 'Login failed');
        this.loading.set(false);
      },
    });
  }

  register(dto: RegisterType) {
    this.loading.set(true);
    this.error.set(null);

    this.auth.register(dto).subscribe({
      next: (tokens) => {
        this.tokens.setTokens(tokens);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.error?.message ?? 'Registration failed');
        this.loading.set(false);
      },
    });
  }

  logout() {
    this.tokens.clear();
  }
}
