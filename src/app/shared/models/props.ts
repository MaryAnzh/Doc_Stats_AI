import { COMPONENTS_SIZE, DEFAULT_SIZE } from '../constants';
import { KeysTemplateType } from './common';

export type LogoSize = typeof DEFAULT_SIZE | typeof COMPONENTS_SIZE.SM;
export type InputSize = KeysTemplateType<typeof COMPONENTS_SIZE>;
