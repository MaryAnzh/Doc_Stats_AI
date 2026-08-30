import { APP_ROUTES } from '../constants';

export type KeysTemplateType<T extends Record<string, string>> = T[keyof T];

export type AppRoutesType = KeysTemplateType<typeof APP_ROUTES>;
