import type { Meta, StoryObj } from '@storybook/angular-vite';
import { ButtonComponent } from './button';
import * as C from '../../constants';
import { ButtonColor } from '../../models';
const { SEARCH, SAVE, ARROW_DOWN, ARROW_RIGHT, ARROW_LEFT, CALENDAR, CLOCK } = C.ICON_NAMES;

const meta: Meta<ButtonComponent> = {
  title: 'UI/Button',
  component: ButtonComponent,
  args: {
    text: 'Button',
    size: C.MD,
    color: C.BASE,
    radius: C.ROUNDED,
    width: C.AUTO,
    disabled: false,
    iconLeft: null,
    iconRight: null,
    imgSrc: null,
  },
  argTypes: {
    size: {
      control: 'select',
      options: [C.SM, C.MD, C.LG],
    },
    color: {
      control: 'select',
      options: [C.BASE, C.SECONDARY, C.ACCENT, C.SUCCESS, C.DANGER, C.GHOST, C.IMAGE],
    },
    radius: {
      control: 'select',
      options: [C.ROUNDED, C.CIRCLE],
    },
    width: {
      control: 'select',
      options: [C.AUTO, C.FULL, C.FIT],
    },
    iconLeft: {
      control: 'select',
      options: [CALENDAR, SEARCH, ARROW_LEFT],
    },
    iconRight: {
      control: 'select',
      options: [SEARCH, SAVE, ARROW_DOWN, ARROW_RIGHT],
    },
    imgSrc: {
      control: 'select',
      options: ['assets/webP/google.webP'],
    },
  },
};

export default meta;

type Story = StoryObj<ButtonComponent>;

const sizes = Object.values(C.COMPONENTS_SIZE);
export const Sizes: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: flex-end;
">
        ${sizes
          .map(
            (size) => `
          <app-button
            text="Size: ${size.toUpperCase()}"
            size="${size}"
            iconLeft="${CLOCK}"
          ></app-button>
        `,
          )
          .join('')}
      </div>
    `,
  }),
};

const colors = Object.values(C.COMPONENT_COLORS);
export const Colors: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        ${colors
          .map(
            (color) => `
          <app-button
            text="${color.toUpperCase()}"
            color="${color}"
            size="${MD}"
            ${color === IMAGE ? `imgSrc="assets/webP/google.webp"` : ''}
          ></app-button>
        `,
          )
          .join('')}
      </div>
    `,
  }),
};

export const WithIconLeft: Story = {
  args: {
    iconLeft: SEARCH,
  },
};

export const WithIconRight: Story = {
  args: {
    iconRight: ARROW_RIGHT,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
