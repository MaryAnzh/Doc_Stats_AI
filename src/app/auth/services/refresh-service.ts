import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { TokensType } from '../models';

@Injectable({ providedIn: 'root' })
export class RefreshService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;
  private api = `${this.baseUrl}/auth`;

  refresh(refreshToken: string): Observable<TokensType> {
    return this.http.post<TokensType>(`${this.api}/refresh`, { refreshToken });
  }
}
