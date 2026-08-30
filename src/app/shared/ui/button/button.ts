import { Component, ChangeDetectionStrategy, input } from '@angular/core';

import * as C from '../../constants';
import * as T from '../../models';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly text = input<string>('');
  readonly size = input<T.ButtonSize>(C.MD);
  readonly color = input<T.ButtonColor>(C.BASE);
  readonly radius = input<T.ButtonRadius>(C.ROUNDED);
  readonly width = input<T.ButtonWidth>(C.AUTO);

  readonly iconLeft = input<T.IconName | null>(null);
  readonly iconRight = input<T.IconName | null>(null);

  readonly imgSrc = input<string | null>(null);

  readonly disabled = input<boolean>(false);
  readonly onClick = input<() => void>(() => {});
}
