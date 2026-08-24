import { Injectable, signal, computed, inject } from '@angular/core';
import { AuthService } from '../../auth/services/auth-service';
import { LoginType, RegisterType, TokenType } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthStore {
  private auth = inject(AuthService);

  public readonly tokens = signal<TokenType | null>(null);
  private readonly loading = signal(false);
  private readonly error = signal<string | null>(null);

  readonly isAuth = computed(() => !!this.tokens());
  readonly accessToken = computed(() => this.tokens()?.accessToken ?? null);

  login(dto: LoginType) {
    this.loading.set(true);
    this.error.set(null);

    this.auth.login(dto).subscribe({
      next: (tokens) => {
        this.tokens.set(tokens);
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
        this.tokens.set(tokens);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.error?.message ?? 'Registration failed');
        this.loading.set(false);
      },
    });
  }

  logout() {
    this.tokens.set(null);
  }

  setTokens(tokens: TokenType) {
    this.tokens.set(tokens);
  }
}
