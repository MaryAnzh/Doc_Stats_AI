import { Injectable, signal } from '@angular/core';
import { TokensType } from '../models';
import { TOKENS } from '../../shared';

@Injectable({ providedIn: 'root' })
export class TokenService {
  private readonly tokens = signal<TokensType | null>(null);

  getTokens() {
    return this.tokens();
  }

  getAccessToken() {
    return this.tokens()?.accessToken ?? null;
  }

  setTokens(tokens: TokensType) {
    console.log(tokens);
    console.log('tokens');

    this.tokens.set(tokens);
    localStorage.setItem(TOKENS, JSON.stringify(tokens));
  }

  loadFromStorage() {
    const saved = localStorage.getItem(TOKENS);
    if (saved) {
      this.tokens.set(JSON.parse(saved));
    }
  }

  clear() {
    this.tokens.set(null);
    localStorage.removeItem(TOKENS);
  }
}
