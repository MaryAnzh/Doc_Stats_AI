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

export const ICON_NAMES = {
  PLUS: 'plus',
  DASH: 'dash',
  X: 'x',
  CHECK: 'check',

  CHEVRON_LEFT: 'chevron-left',
  CHEVRON_RIGHT: 'chevron-right',
  CHEVRON_UP: 'chevron-up',
  CHEVRON_DOWN: 'chevron-down',

  ARROW_LEFT: 'arrow-left',
  ARROW_RIGHT: 'arrow-right',
  ARROW_UP: 'arrow-up',
  ARROW_DOWN: 'arrow-down',

  SEARCH: 'search',
  FILTER: 'filter',
  TRASH: 'trash',
  PENCIL: 'pencil',
  SAVE: 'save',
  DOWNLOAD: 'download',
  UPLOAD: 'upload',

  BOX_ARROW_IN_RIGHT: 'box-arrow-in-right',
  BOX_ARROW_RIGHT: 'box-arrow-right',

  PERSON: 'person',
  GEAR: 'gear',
  INFO_CIRCLE: 'info-circle',
  EXCLAMATION_CIRCLE: 'exclamation-circle',

  CALENDAR: 'calendar',
  CLOCK: 'clock',
} as const;
