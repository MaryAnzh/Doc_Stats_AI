import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LayoutComponent } from '../../../layout/layout/layout';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.html',
  styleUrls: ['../styles.scss', './register-page.scss'],
  imports: [LayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent {}
