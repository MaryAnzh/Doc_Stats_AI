import {
  COMPONENT_COLORS,
  COMPONENT_RADIUS,
  COMPONENT_WIDTH,
  COMPONENTS_SIZE,
} from '../../constants';
import { KeysTemplateType } from '../common';

export type ButtonSize = KeysTemplateType<typeof COMPONENTS_SIZE>;
export type ButtonColor = KeysTemplateType<typeof COMPONENT_COLORS>;
export type ButtonRadius = KeysTemplateType<typeof COMPONENT_RADIUS>;
export type ButtonWidth = KeysTemplateType<typeof COMPONENT_WIDTH>;
export type IconName =
  | 'plus'
  | 'dash'
  | 'x'
  | 'check'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'chevron-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up'
  | 'arrow-down'
  | 'search'
  | 'filter'
  | 'trash'
  | 'pencil'
  | 'save'
  | 'download'
  | 'upload'
  | 'box-arrow-in-right'
  | 'box-arrow-right'
  | 'person'
  | 'gear'
  | 'info-circle'
  | 'exclamation-circle'
  | 'calendar'
  | 'clock';
