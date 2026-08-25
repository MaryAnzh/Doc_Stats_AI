import { COMPONENTS_SIZE, DEFAULT_SIZE } from '../constants';

export type LogoSize = typeof DEFAULT_SIZE | typeof COMPONENTS_SIZE.SM;
export type InputSize = keyof typeof COMPONENTS_SIZE;
