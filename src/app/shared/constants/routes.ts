export const ROUTES = {
  AUTH: 'auth',
  LOGIN: 'login',
  REGISTER: 'register',
  REFRESH: 'refresh',
  ME: 'me',
  LOGOUT: 'logout',
  DASHBOARD: 'dashboard',
} as const;
export const { AUTH, LOGIN, REGISTER, REFRESH, ME, LOGOUT, DASHBOARD } = ROUTES;

export const APP_ROUTES = {
  AUTH_LOGIN: `${AUTH}/${LOGIN}`,
  AUTH_REGISTER: `${AUTH}/${REGISTER}`,
  DASHBOARD: '',
  NOT_FOUND: 'not-found',
} as const;
