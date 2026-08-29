import { COMPONENTS_SIZE, DEFAULT_SIZE, ICON_NAMES } from '../constants';
import { KeysTemplateType } from './common';

export type LogoSize = typeof DEFAULT_SIZE | typeof COMPONENTS_SIZE.SM;
export type InputSize = KeysTemplateType<typeof COMPONENTS_SIZE>;
export type InputIcon = KeysTemplateType<typeof ICON_NAMES>;
