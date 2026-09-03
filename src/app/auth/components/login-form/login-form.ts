import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { email, form, maxLength, minLength, pattern, required } from '@angular/forms/signals';

import { AuthStore } from '../../store/auth-store';
import { InputComponent, ButtonComponent } from '../../../shared/ui';
import { TypographyDirective } from '../../../shared/directive/typography';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.html',
  styleUrls: ['./login-form.scss', '../styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [InputComponent, TypographyDirective, ButtonComponent],
})
export class LoginFormComponent {
  private store = inject(AuthStore);

  readonly loginModel = signal({
    email: '',
    password: '',
  });

  readonly loading = computed(() => this.store.loading());
  readonly error = computed(() => this.store.error());

  readonly loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, { message: 'Email is required' });
    email(schemaPath.email, { message: 'Enter a valid email address' });

    required(schemaPath.password, { message: 'Password is required' });
    minLength(schemaPath.password, 8, { message: 'Minimum 8 characters' });
    maxLength(schemaPath.password, 32, { message: 'Maximum 32 characters' });
    pattern(schemaPath.password, /[A-Za-z]/, {
      message: 'Password must contain at least one Latin letter',
    });
    pattern(schemaPath.password, /\d/, {
      message: 'Password must contain at least one digit',
    });
    pattern(schemaPath.password, /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
      message: 'Password must contain at least one special symbol',
    });
  });
  constructor() {
    console.log(this.loginForm().errors());
  }

  handleFocus() {
    this.store.clearError();
  }

  submit() {
    if (this.loginForm().invalid()) return;

    this.store.login({
      email: this.loginModel().email,
      password: this.loginModel().password,
    });
  }
}
