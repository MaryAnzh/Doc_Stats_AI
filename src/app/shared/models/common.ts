import { APP_ROUTES, ICON_NAMES } from '../constants';

export type KeysTemplateType<T extends Record<string, string>> = T[keyof T];

export type AppRoutesType = KeysTemplateType<typeof APP_ROUTES>;
export type IconNameType = KeysTemplateType<typeof ICON_NAMES>;
