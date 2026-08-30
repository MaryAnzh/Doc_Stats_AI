export type TokenType = {
  accessToken: string;
  refreshToken: string;
};

export type LoginType = {
  email: string;
  password: string;
};

export type RegisterType = LoginType & {
  name?: string;
};

export type CurrentUserType = {
  id: string;
  name: string | null;
  email: string;
  avatarUrl: string | null;
};
