import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { LogoSize } from '../../models';
import { COMPONENTS_SIZE } from '../../constants';

const { DEFAULT, SM } = COMPONENTS_SIZE;

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './logo.scss',
})
export class LogoComponent {
  readonly showText = input<boolean>(true);
  readonly size = input<LogoSize>(DEFAULT);

  logoSizeClass = this.size() === SM ? 'logo logo--small' : 'logo';
}
