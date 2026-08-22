import type { Meta, StoryObj } from '@storybook/angular-vite';
import { LogoComponent } from './logo';

const meta: Meta<LogoComponent> = {
  title: 'UI/Logo',
  component: LogoComponent,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj<LogoComponent> = {
  args: {},
};
