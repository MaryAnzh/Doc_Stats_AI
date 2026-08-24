import { Component, ChangeDetectionStrategy, input, model, computed } from '@angular/core';
import { InputSize } from '../../models';
import { LG, MD, SM } from '../../constants';

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

  readonly iconLeft = input<string | null>(null);
  readonly iconRight = input<string | null>(null);

  readonly size = input<InputSize>(MD);
  readonly disabled = input<boolean>(false);

  sizeClassChart = {
    [SM]: 'input--sm',
    [MD]: 'input--md',
    [LG]: 'input--lg',
  } as const;

  readonly sizeClass = computed(() => this.sizeClassChart[this.size()]);

  onChangeValue(value: string) {
    this.value.update(() => value);
  }
}
