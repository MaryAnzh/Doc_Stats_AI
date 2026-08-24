import { Meta, StoryObj } from '@storybook/angular-vite';
import { InputComponent } from './input';

const meta: Meta<InputComponent> = {
  title: 'UI/Input',
  component: InputComponent,
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    label: { control: 'text' },
    error: { control: 'text' },
    iconLeft: { control: 'text' }, // bootstrap icon name
    iconRight: { control: 'text' }, // bootstrap icon name
    size: { control: 'select', options: ['SM', 'MD', 'LG'] },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter email',
    value: '',
    size: 'MD',
  },
};

export const WithIcons: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    iconLeft: 'search',
    iconRight: 'x-lg',
    size: 'MD',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter email',
    error: 'Invalid email format',
    size: 'MD',
  },
};

export const Large: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Alice',
    size: 'LG',
  },
};
