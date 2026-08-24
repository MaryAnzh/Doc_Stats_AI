import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LayoutComponent } from '../../../layout/layout/layout';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.html',
  styleUrls: ['../styles.scss', './login-page.scss'],
  imports: [LayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {}
