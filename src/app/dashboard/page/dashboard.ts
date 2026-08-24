import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { AuthStore } from '../../auth/store/auth-store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  store = inject(AuthStore);
}
