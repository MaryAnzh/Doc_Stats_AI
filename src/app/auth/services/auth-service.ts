import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { CurrentUserType, LoginType, RegisterType, TokenType } from '../models';
import { AUTH, LOGIN, LOGOUT, ME, REFRESH, REGISTER } from '../../shared';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly baseUrl = environment.apiUrl;
  private http = inject(HttpClient);
  private api = `${this.baseUrl}/${AUTH}`;

  constructor() {
    this.http.get(`${this.baseUrl}/health`).subscribe({
      next: (v) => {
        console.log('response');
        console.log(v);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  login(dto: LoginType): Observable<TokenType> {
    return this.http.post<TokenType>(`${this.api}/${LOGIN}`, dto);
  }

  register(dto: RegisterType): Observable<TokenType> {
    return this.http.post<TokenType>(`${this.api}/${REGISTER}`, dto);
  }

  me(): Observable<CurrentUserType> {
    return this.http.get<CurrentUserType>(`${this.api}/${ME}`);
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${this.api}/${LOGOUT}`, {});
  }
}
