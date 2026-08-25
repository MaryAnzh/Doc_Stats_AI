import { Component, ChangeDetectionStrategy, model, inject } from '@angular/core';
import { AuthStore } from '../../store/auth-store';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  readonly email = model<string>('');
  readonly password = model<string>('');

  store = inject(AuthStore);

  submit() {
    this.store.login({
      email: this.email(),
      password: this.password(),
    });
  }
}
