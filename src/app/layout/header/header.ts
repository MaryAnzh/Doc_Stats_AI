import {
  Component,
  input,
  inject,
  computed,
  output
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import type { ThemeType } from '../../shared';
import { THEMES } from '../../shared';
import { Logo } from "../../shared/ui";
const { LIGHT, DARK } = THEMES;

@Component({
  selector: 'app-header',
  imports: [Logo],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private router = inject(Router);

  theme = input<ThemeType>();
  toggleTheme = input<() => void>();
  lightTheme = LIGHT;
  darkTheme = DARK;

  handleTheme() {
    this.toggleTheme()?.();
  }
}
