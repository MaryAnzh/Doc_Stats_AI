import type { Meta, StoryObj } from '@storybook/angular-vite';
import { ButtonComponent } from './button';
import {
  ACCENT,
  AUTO,
  BASE,
  CIRCLE,
  DANGER,
  FIT,
  FULL,
  GHOST,
  IMAGE,
  LG,
  MD,
  ROUNDED,
  SECONDARY,
  SM,
  SUCCESS,
} from '../../constants';

const meta: Meta<ButtonComponent> = {
  title: 'UI/Button',
  component: ButtonComponent,
  args: {
    text: 'Button',
    size: MD,
    color: BASE,
    radius: ROUNDED,
    width: AUTO,
    disabled: false,
    iconLeft: null,
    iconRight: null,
    imgSrc: null,
  },
  argTypes: {
    size: {
      control: 'select',
      options: [SM, MD, LG],
    },
    color: {
      control: 'select',
      options: [BASE, SECONDARY, ACCENT, SUCCESS, DANGER, GHOST, IMAGE],
    },
    radius: {
      control: 'select',
      options: [ROUNDED, CIRCLE],
    },
    width: {
      control: 'select',
      options: [AUTO, FULL, FIT],
    },
    iconLeft: {
      control: 'text',
    },
    iconRight: {
      control: 'text',
    },
    imgSrc: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const Base: Story = {};

export const WithIconLeft: Story = {
  args: {
    iconLeft: 'plus',
  },
};

export const WithIconRight: Story = {
  args: {
    iconRight: 'arrow-right',
  },
};

export const Ghost: Story = {
  args: {
    color: GHOST,
  },
};

export const Danger: Story = {
  args: {
    color: DANGER,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const ImageButton: Story = {
  args: {
    imgSrc: 'assets/webP/google.webp',
  },
};
