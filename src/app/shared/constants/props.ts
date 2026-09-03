export const DEFAULT_SIZE = 'default' as const;

export const COMPONENTS_SIZE = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const;
export const { SM, MD, LG } = COMPONENTS_SIZE;

export const COMPONENT_COLORS = {
  BASE: 'base',
  SECONDARY: 'secondary',
  ACCENT: 'accent',
  SUCCESS: 'success',
  DANGER: 'danger',
  GHOST: 'ghost',
  IMAGE: 'image',
} as const;
export const { ACCENT, BASE, GHOST, IMAGE, SECONDARY, SUCCESS, DANGER } = COMPONENT_COLORS;

export const COMPONENT_RADIUS = {
  ROUNDED: 'rounded',
  CIRCLE: 'circle',
} as const;
export const { CIRCLE, ROUNDED } = COMPONENT_RADIUS;

export const COMPONENT_WIDTH = {
  AUTO: 'auto',
  FULL: 'full',
  FIT: 'fit',
} as const;
export const { AUTO, FIT, FULL } = COMPONENT_WIDTH;

export const INPUT_TYPES = {
  TEXT: 'text',
  EMAIL: 'email',
  PASSWORD: 'password',
} as const;
