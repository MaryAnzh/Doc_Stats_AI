import { Component, ChangeDetectionStrategy, input, inject } from '@angular/core';
import { HeaderComponent } from '../header/header';
import { AppStore } from '../../core/store/app-store';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  imports: [HeaderComponent, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  store = inject(AppStore);
  readonly withoutHeader = input<boolean>(false);
}
