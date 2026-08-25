import { Component, ChangeDetectionStrategy, model, inject } from '@angular/core';
import { AuthStore } from '../../store/auth-store';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.html',
  styleUrl: './register-form.scss',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent {
  readonly email = model<string>('');
  readonly name = model<string>('');
  readonly password = model<string>('');

  store = inject(AuthStore);

  submit() {
    this.store.register({
      email: this.email(),
      name: this.name(),
      password: this.password(),
    });
  }
}
