import { Meta, StoryObj } from '@storybook/angular-vite';
import { LogoComponent } from './logo';
import { COMPONENTS_SIZE } from '../../constants';
const { DEFAULT, SM } = COMPONENTS_SIZE;

const meta: Meta<LogoComponent> = {
  title: 'UI/Logo',
  component: LogoComponent,
  argTypes: {
    showText: {
      control: 'boolean',
      description: 'Show logo test',
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
