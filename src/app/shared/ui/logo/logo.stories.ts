import { Meta, StoryObj, applicationConfig } from '@storybook/angular-vite';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { LogoComponent } from './logo';
import { SM, DEFAULT_SIZE as DEFAULT } from '../../constants';

const meta: Meta<LogoComponent> = {
  title: 'UI/Logo',
  component: LogoComponent,
  decorators: [
    applicationConfig({
      providers: [
        { provide: RouterLink, useValue: () => {} },
        { provide: ActivatedRoute, useValue: () => {} },
      ],
    }),
  ],
  argTypes: {
    showText: {
      control: 'boolean',
      description: 'Show logo text',
    },
    size: {
      control: 'select',
      options: [DEFAULT, SM],
      description: 'Logo size',
    },
  },
};

export default meta;

type Story = StoryObj<LogoComponent>;

export const Default: Story = {
  args: {
    showText: true,
    size: DEFAULT,
  },
};

export const Small: Story = {
  args: {
    showText: true,
    size: SM,
  },
};

export const IconOnly: Story = {
  args: {
    showText: false,
    size: DEFAULT,
  },
};
