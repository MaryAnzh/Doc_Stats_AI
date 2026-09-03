import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { form, required, email, minLength, maxLength, pattern } from '@angular/forms/signals';

import { AuthStore } from '../../store/auth-store';
import { TypographyDirective } from '../../../shared/directive/typography';
import { InputComponent, ButtonComponent } from '../../../shared/ui';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.html',
  styleUrls: ['./register-form.scss', '../styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TypographyDirective, InputComponent, ButtonComponent],
})
export class RegisterFormComponent {
  private store = inject(AuthStore);

  readonly registerModel = signal({
    name: '',
    email: '',
    password: '',
  });

  readonly loading = computed(() => this.store.loading());
  readonly error = computed(() => this.store.error());

  readonly registerForm = form(this.registerModel, (schema) => {
    // Name
    required(schema.name, { message: 'Name is required' });
    minLength(schema.name, 2, { message: 'Minimum 2 characters' });
    maxLength(schema.name, 32, { message: 'Maximum 32 characters' });

    // Email
    required(schema.email, { message: 'Email is required' });
    email(schema.email, { message: 'Enter a valid email address' });

    // Password
    required(schema.password, { message: 'Password is required' });
    minLength(schema.password, 8, { message: 'Minimum 8 characters' });
    maxLength(schema.password, 32, { message: 'Maximum 32 characters' });
    pattern(schema.password, /[A-Za-z]/, {
      message: 'Password must contain at least one Latin letter',
    });
    pattern(schema.password, /\d/, {
      message: 'Password must contain at least one digit',
    });
    pattern(schema.password, /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
      message: 'Password must contain at least one special symbol',
    });
  });

  handleFocus() {
    this.store.clearError();
  }

  submit() {
    if (this.registerForm().invalid()) return;

    this.store.register({
      name: this.registerModel().name,
      email: this.registerModel().email,
      password: this.registerModel().password,
    });
  }
}
