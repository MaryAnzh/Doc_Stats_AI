import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LayoutComponent } from '../../../layout/layout/layout';
import { RegisterFormComponent } from '../../components/register-form/register-form';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.html',
  styleUrls: ['../styles.scss', './register-page.scss'],
  imports: [LayoutComponent, RegisterFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent {}
