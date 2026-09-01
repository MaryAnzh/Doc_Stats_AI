import { Component, ChangeDetectionStrategy, input, model, computed } from '@angular/core';
import { InputIcon, InputSize } from '../../models';
import { MD } from '../../constants';

@Component({
  selector: 'app-input',
  templateUrl: './input.html',
  styleUrl: './input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  readonly value = model<string>('');
  readonly placeholder = input<string>('');
  readonly label = input<string | null>(null);
  readonly error = input<string | null>(null);

  readonly iconLeft = input<InputIcon | null>(null);
  readonly iconRight = input<InputIcon | null>(null);

  readonly size = input<InputSize>(MD);
  readonly disabled = input<boolean>(false);

  onChangeValue(value: string) {
    this.value.update(() => value);
  }
}
