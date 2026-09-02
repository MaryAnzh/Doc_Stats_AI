import { COMPONENTS_SIZE, INPUT_TYPES } from '../../constants';
import { KeysTemplateType } from '../common';

export type InputSize = KeysTemplateType<typeof COMPONENTS_SIZE>;
export type InputValueType = KeysTemplateType<typeof INPUT_TYPES>;
