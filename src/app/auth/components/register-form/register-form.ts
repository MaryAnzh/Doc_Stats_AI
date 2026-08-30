import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { signal, computed } from '@angular/core';

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

  readonly name = signal('');
  readonly email = signal('');
  readonly password = signal('');

  submit() {
    this.store.register({
      name: this.name(),
      email: this.email(),
      password: this.password(),
    });
  }

  readonly loading = computed(() => this.store.loading());
  readonly error = computed(() => this.store.error());
}
