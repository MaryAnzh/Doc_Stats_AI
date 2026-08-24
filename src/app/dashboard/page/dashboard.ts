import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { AuthStore } from '../../auth/store/auth-store';
import { LayoutComponent } from '../../layout/layout/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-.html',
  styleUrl: './dashboard.scss',
  imports: [LayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  store = inject(AuthStore);
}
