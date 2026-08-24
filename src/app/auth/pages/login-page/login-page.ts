import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LoginFormComponent } from '../../components/loginForm/login-form';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.html',
  styleUrl: '../styles.scss',
  imports: [LoginFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {}
