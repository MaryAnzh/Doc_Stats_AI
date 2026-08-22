import { Meta, StoryObj } from '@storybook/angular-vite';
import { LogoComponent } from './logo';

const meta: Meta<LogoComponent> = {
  title: 'UI/Logo',
  component: LogoComponent,
};

export default meta;
type Story = StoryObj<LogoComponent>;

export const Default: Story = {
  args: {},
};
