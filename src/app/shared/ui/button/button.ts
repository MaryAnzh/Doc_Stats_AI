import { Component, ChangeDetectionStrategy, input, inject } from '@angular/core';
import { Router } from '@angular/router';

import * as C from '../../constants';
import * as T from '../../models';
import { AppRoutesType } from '../../models/common';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  private router = inject(Router);

  readonly text = input<string>('');
  readonly size = input<T.ButtonSize>(C.MD);
  readonly color = input<T.ButtonColor>(C.BASE);
  readonly radius = input<T.ButtonRadius>(C.ROUNDED);
  readonly width = input<T.ButtonWidth>(C.AUTO);

  readonly iconLeft = input<T.IconName | null>(null);
  readonly iconRight = input<T.IconName | null>(null);

  readonly imgSrc = input<string | null>(null);

  readonly disabled = input<boolean>(false);
  readonly navTo = input<AppRoutesType | null>(null);

  readonly onClick = input<() => void>(() => {});

  handleClick() {
    if (this.disabled()) return;

    if (this.navTo()) {
      this.router.navigate([this.navTo()]);
      return;
    }

    this.onClick()();
  }
}
