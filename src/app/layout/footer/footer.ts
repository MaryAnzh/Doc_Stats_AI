import { Component, ChangeDetectionStrategy, input, inject, computed } from '@angular/core';
import { AppStore } from '../../core/store/app-store';
import { TypographyDirective } from '../../shared/directive/typography';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  imports: [TypographyDirective],
})
export class FooterComponent {
  private appStore = inject(AppStore);

  readonly isServerHealth = this.appStore.isServerHealth;
}
