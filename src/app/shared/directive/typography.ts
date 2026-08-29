import { Directive, ElementRef, effect, inject, input } from '@angular/core';
import { TYPOGRAPHY_STYLES } from '../constants';

@Directive({
  selector: '[appTypography]',
  standalone: true,
})
export class TypographyDirective {
  readonly variant = input<keyof typeof TYPOGRAPHY_STYLES>('bodySMedium');
  private el = inject(ElementRef<HTMLElement>);

  constructor() {
    effect(() => {
      const style = TYPOGRAPHY_STYLES[this.variant()];

      this.el.nativeElement.style.fontSize = style.size;
      this.el.nativeElement.style.lineHeight = style.lineHeight;
      this.el.nativeElement.style.letterSpacing = style.letterSpacing;
      this.el.nativeElement.style.fontWeight = style.weight.toString();
    });
  }
}
