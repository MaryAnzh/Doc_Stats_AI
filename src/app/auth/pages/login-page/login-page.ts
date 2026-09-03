import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LayoutComponent } from '../../../layout/layout/layout';
import { LoginFormComponent } from '../../components/login-form/login-form';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.html',
  styleUrls: ['../styles.scss', './login-page.scss'],
  imports: [LayoutComponent, LoginFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {}
