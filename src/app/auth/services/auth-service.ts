import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { LoginType, RegisterType, TokensType } from '../models';
import { AUTH, LOGIN, LOGOUT, ME, REGISTER } from '../../shared';
import { UserType } from '../../shared/models/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly baseUrl = environment.apiUrl;
  private http = inject(HttpClient);
  private api = `${this.baseUrl}/${AUTH}`;

  login(dto: LoginType): Observable<TokensType> {
    return this.http.post<TokensType>(`${this.api}/${LOGIN}`, dto);
  }

  register(dto: RegisterType): Observable<TokensType> {
    return this.http.post<TokensType>(`${this.api}/${REGISTER}`, dto);
  }

  me(): Observable<UserType> {
    return this.http.get<UserType>(`${this.api}/${ME}`);
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${this.api}/${LOGOUT}`, {});
  }
}
