import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginType, RegisterType, TokenType } from '../models';
import { AUTH, LOGIN, LOGOUT, ME, REFRESH, REGISTER } from '../../shared';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private api = `/${AUTH}`;

  login(dto: LoginType): Observable<TokenType> {
    return this.http.post<TokenType>(`${this.api}/${LOGIN}`, dto);
  }

  register(dto: RegisterType): Observable<TokenType> {
    return this.http.post<TokenType>(`${this.api}/${REGISTER}`, dto);
  }

  refresh(refreshToken: string): Observable<TokenType> {
    return this.http.post<TokenType>(`${this.api}/${REFRESH}`, { refreshToken });
  }

  me(): Observable<any> {
    return this.http.get(`${this.api}/${ME}`);
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${this.api}/${LOGOUT}`, {});
  }
}
