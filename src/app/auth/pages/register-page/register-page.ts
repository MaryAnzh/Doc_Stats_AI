import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RegisterFormComponent } from '../../components/register-form/register-form';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.html',
  styleUrl: '../styles.scss',
  imports: [RegisterFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent {}
