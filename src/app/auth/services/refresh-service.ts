import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { TokenType } from '../models';

@Injectable({ providedIn: 'root' })
export class RefreshService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;
  private api = `${this.baseUrl}/auth`;

  refresh(refreshToken: string): Observable<TokenType> {
    return this.http.post<TokenType>(`${this.api}/refresh`, { refreshToken });
  }
}
