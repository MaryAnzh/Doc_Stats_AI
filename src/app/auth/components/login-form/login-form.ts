import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { signal, computed } from '@angular/core';
import { AuthStore } from '../../store/auth-store';
import { InputComponent } from '../../../shared/ui';
import { TypographyDirective } from '../../../shared/directive/typography';
import { ButtonComponent } from '../../../shared/ui/button/button';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.html',
  styleUrls: ['./login-form.scss', '../styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [InputComponent, TypographyDirective, ButtonComponent],
})
export class LoginFormComponent {
  private store = inject(AuthStore);

  readonly email = signal('');
  readonly password = signal('');

  submit() {
    this.store.login({
      email: this.email(),
      password: this.password(),
    });
  }

  readonly loading = computed(() => this.store.loading());
  readonly error = computed(() => this.store.error());
}
