import {
  COMPONENT_COLORS,
  COMPONENT_RADIUS,
  COMPONENT_WIDTH,
  COMPONENTS_SIZE,
  ICON_NAMES,
} from '../../constants';
import { KeysTemplateType } from '../common';

export type ButtonSize = KeysTemplateType<typeof COMPONENTS_SIZE>;
export type ButtonColor = KeysTemplateType<typeof COMPONENT_COLORS>;
export type ButtonRadius = KeysTemplateType<typeof COMPONENT_RADIUS>;
export type ButtonWidth = KeysTemplateType<typeof COMPONENT_WIDTH>;
export type IconName = KeysTemplateType<typeof ICON_NAMES>;
