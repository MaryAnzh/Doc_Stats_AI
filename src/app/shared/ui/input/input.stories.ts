import { Meta, StoryObj } from '@storybook/angular-vite';
import { InputComponent } from './input';
import { LG, MD, SM, ICON_NAMES } from '../../constants';
const { SEARCH, SAVE, PLUS, CLOCK, CALENDAR } = ICON_NAMES;

const meta: Meta<InputComponent> = {
  title: 'UI/Input',
  component: InputComponent,
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    label: { control: 'text' },
    errors: { control: 'text' },
    iconLeft: { control: 'select', options: [SEARCH, PLUS] }, // bootstrap icon name
    iconRight: { control: 'select', options: [SAVE, CLOCK, CALENDAR] }, // bootstrap icon name
    size: { control: 'select', options: [SM, MD, LG] },
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
    size: MD,
  },
};

export const WithIcons: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    iconLeft: SEARCH,
    iconRight: SAVE,
    size: MD,
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter email',
    errors: ['Invalid email format'],
    size: MD,
  },
};

export const Large: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Alice',
    size: LG,
  },
};
