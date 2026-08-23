import type { Meta, StoryObj } from '@storybook/angular-vite';
import { HeaderComponent } from './header';

const meta: Meta<HeaderComponent> = {
  title: 'Layout/Header',
  component: HeaderComponent,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default: StoryObj<HeaderComponent> = {
  args: {},
};
