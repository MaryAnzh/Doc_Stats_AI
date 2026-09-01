import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppService {
  private readonly baseUrl = environment.apiUrl;
  private http = inject(HttpClient);

  health(): Observable<boolean> {
    return this.http.get(`${this.baseUrl}/health`).pipe(
      map(() => true),
      catchError(() => of(false)),
    );
  }
}
