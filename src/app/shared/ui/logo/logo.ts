import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { LogoSize } from '../../models';
import { COMPONENTS_SIZE, DEFAULT_SIZE } from '../../constants';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  templateUrl: './logo.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './logo.scss',
})
export class LogoComponent {
  readonly showText = input<boolean>(true);
  readonly size = input<LogoSize>(DEFAULT_SIZE);
}
