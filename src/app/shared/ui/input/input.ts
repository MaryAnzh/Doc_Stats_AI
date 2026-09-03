import { Component, ChangeDetectionStrategy, input, model, output } from '@angular/core';
import { INPUT_TYPES, MD } from '../../constants';
import * as T from '../../models';
import { TypographyDirective } from '../../directive/typography';

@Component({
  selector: 'app-input',
  templateUrl: './input.html',
  styleUrl: './input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TypographyDirective],
})
export class InputComponent {
  readonly value = model<string>('');
  readonly placeholder = input<string>('');
  readonly label = input<string | null>(null);
  readonly errors = input<string[] | null>(null);

  readonly iconLeft = input<T.IconNameType | null>(null);
  readonly iconRight = input<T.IconNameType | null>(null);

  readonly size = input<T.InputSize>(MD);
  readonly maxErrorCount = input<number>(1);

  readonly valueType = input<T.InputValueType>(INPUT_TYPES.TEXT);
  readonly disabled = input<boolean>(false);
  readonly onFocus = output<void>();

  handleChangeValue(value: string) {
    this.value.update(() => value);
  }

  handleFocus() {
    this.onFocus.emit();
  }
}
