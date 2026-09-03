import { Meta, StoryObj } from '@storybook/angular-vite';
import { InputComponent } from './input';
import { LG, MD, SM, ICON_NAMES, INPUT_TYPES, COMPONENTS_SIZE } from '../../constants';

const { SEARCH, SAVE, PLUS, CLOCK, CALENDAR } = ICON_NAMES;
const { TEXT, EMAIL, PASSWORD } = INPUT_TYPES;

const meta: Meta<InputComponent> = {
  title: 'UI/Input',
  component: InputComponent,
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    label: { control: 'text' },
    errors: { control: 'object' },

    iconLeft: { control: 'select', options: [SEARCH, PLUS] },
    iconRight: { control: 'select', options: [SAVE, CLOCK, CALENDAR] },

    size: { control: 'select', options: [SM, MD, LG] },
    disabled: { control: 'boolean' },

    maxErrorCount: { control: 'number' },
    valueType: { control: 'select', options: [TEXT, EMAIL, PASSWORD] },
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
    valueType: EMAIL,
    maxErrorCount: 1,
  },
};

const sizes = Object.values(COMPONENTS_SIZE);
export const Sizes: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; gap: 16px; flex-direction: column;">
        ${sizes
          .map(
            (size) => `
          <app-input
          size="${size}"
          label="${`size-${size}`}"
          placeholder="${size.toUpperCase()}"
          iconLeft="${SEARCH}"
          ></app-input>
        `,
          )
          .join('')}
      </div>
    `,
  }),
};

export const WithIcons: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    iconLeft: SEARCH,
    iconRight: SAVE,
    size: MD,
    valueType: TEXT,
    maxErrorCount: 1,
  },
};

export const WithError: Story = {
  args: {
    label: 'Email (Focus on input to see error)',
    placeholder: 'Email',
    errors: ['Invalid email format'],
    size: MD,
    valueType: EMAIL,
    maxErrorCount: 1,
  },
};

export const MultipleErrors: Story = {
  args: {
    label: 'Password (Focus on input to see error)',
    placeholder: 'Enter password',
    errors: ['Minimum 8 characters', 'Must contain a digit', 'Must contain a special symbol'],
    size: MD,
    valueType: PASSWORD,
    maxErrorCount: 4,
  },
};
