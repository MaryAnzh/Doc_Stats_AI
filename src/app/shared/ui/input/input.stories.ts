import { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input';

const meta: Meta<InputComponent> = {
  title: 'UI/Input',
  component: InputComponent,
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    size: { control: 'select', options: ['SM', 'MD', 'LG'] },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Enter text...',
    error: null,
    size: 'MD',
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    value: '',
    placeholder: 'Small input',
    error: null,
    size: 'SM',
  },
};

export const Large: Story = {
  args: {
    value: '',
    placeholder: 'Large input',
    error: null,
    size: 'LG',
  },
};

export const WithError: Story = {
  args: {
    value: '',
    placeholder: 'Email',
    error: 'Invalid email format',
    size: 'MD',
  },
};
