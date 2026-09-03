import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppStore } from './core/store/app-store';
import { AuthStore } from './auth/store/auth-store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss',
})
export class AppComponent {
  store = inject(AppStore);
  auth = inject(AuthStore);

  protected readonly title = signal('Docs Stats AI');

  constructor() {
    this.store.initTheme();
    this.auth.init();
  }
}
